import { useEffect } from "react";

// Reusable component for displaying bullet lists
const List = ({ items }) => (
  <ul className="vip-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Reusable expandable section component
const Section = ({ title, children, id }) => (
  <details className="vip-section" id={id}>
    <summary className="vip-section-title">
      <span>{title}</span>
      <span className="vip-toggle-icon"></span>
    </summary>

    <div className="vip-section-content">
      {children}
    </div>
  </details>
);

// Main VIP Page Component
export default function VIPPage() {

  // Set page title and noindex metadata
  useEffect(() => {
    document.title = "CCDC VIP | Colorado Colonics";

    let robots = document.querySelector('meta[name="robots"]');
    const created = !robots;

    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }

    const previous = robots.content;

    robots.content = "noindex, nofollow";

    return () => {
      if (created) {
        robots.remove();
      } else {
        robots.content = previous;
      }
    };
  }, []);

  // Expand all sections
  const expandAll = () => {
    document.querySelectorAll(".vip-section").forEach((section) => {
      section.open = true;
    });
  };

  // Collapse all sections
  const collapseAll = () => {
    document.querySelectorAll(".vip-section").forEach((section) => {
      section.open = false;
    });
  };

  return (
    <main className="vip-page">

      <style>{`

        /* ==============================
           MAIN VIP PAGE
        ============================== */

        .vip-page {
          width: 100%;
          min-height: 100vh;
          position: relative;
          margin: 0;
          padding: clamp(115px, 12vw, 155px) 0 70px;
          background: linear-gradient(180deg, #f7f9fc, #eef3f8);
          color: #182532;
          font-family: Georgia, serif;
          overflow-x: hidden;
        }

        .vip-page * {
          box-sizing: border-box;
        }

        .vip-container {
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 0 clamp(14px, 4vw, 72px);
        }


        /* ==============================
           VIP HEADER
        ============================== */

        .vip-heading {
          text-align: center;
          padding: 30px 12px 42px;
        }

        .vip-heading h1 {
          color: #254f9d;
          font-size: clamp(40px, 6vw, 76px);
          line-height: 1.1;
          margin: 0 0 18px;
          letter-spacing: .04em;
          text-shadow: 0 2px 0 #ffffff;
        }

        .vip-heading h2 {
          color: #345eaa;
          font-size: clamp(22px, 3vw, 40px);
          font-weight: normal;
          line-height: 1.3;
          margin: 0 0 18px;
        }

        .vip-heading p {
          font-size: clamp(17px, 2vw, 24px);
          line-height: 1.7;
          margin: 0;
          color: #526170;
        }

        .vip-divider {
          border: 0;
          border-top: 1px solid #c8d4e3;
          width: 100%;
          margin: 32px auto;
        }


        /* ==============================
           EXPAND / COLLAPSE BUTTONS
        ============================== */

        .vip-toolbar {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin: 0 auto 35px;
        }

        .vip-toolbar button {
          border: 1px solid #254f9d;
          background: #ffffff;
          color: #254f9d;
          padding: 13px 25px;
          border-radius: 50px;
          font-size: 15px;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(37,79,157,.08);
          transition: all .3s ease;
        }

        .vip-toolbar button:hover {
          background: #254f9d;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(37,79,157,.2);
        }


        /* ==============================
           INTERACTIVE SECTIONS
        ============================== */

        .vip-section {
          width: 100%;
          margin: 0 auto 26px;
          padding: 0;
          background: rgba(255,255,255,.95);
          border: 1px solid #dce5ef;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(31,55,87,.08);
          transition: box-shadow .3s ease, transform .3s ease;
        }

        .vip-section:hover {
          box-shadow: 0 18px 38px rgba(31,55,87,.13);
          transform: translateY(-2px);
        }

        .vip-section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          list-style: none;
          text-align: left;
          padding: 25px clamp(18px, 3vw, 44px);
          font-size: clamp(22px, 2.8vw, 35px);
          color: #254f9d;
          line-height: 1.35;
          font-weight: normal;
          background: linear-gradient(90deg, #f0f5ff, #ffffff);
        }

        .vip-section-title::-webkit-details-marker {
          display: none;
        }

        .vip-toggle-icon {
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          display: grid;
          place-items: center;
          background: #e3edff;
          border-radius: 50%;
          transition: transform .3s ease;
        }

        .vip-toggle-icon::before {
          content: "+";
          font-family: Arial, sans-serif;
          font-size: 27px;
          color: #254f9d;
        }

        .vip-section[open] .vip-toggle-icon {
          transform: rotate(180deg);
        }

        .vip-section[open] .vip-toggle-icon::before {
          content: "−";
        }

        .vip-section-content {
          padding: 0 clamp(18px, 3vw, 44px) 34px;
          font-size: clamp(16px, 1.45vw, 19px);
          line-height: 1.85;
          animation: vipFade .35s ease;
        }

        .vip-section-content p {
          margin: 0 0 20px;
        }

        @keyframes vipFade {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ==============================
           GRID LAYOUT
        ============================== */

        .vip-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          width: 100%;
        }


        /* ==============================
           CONTENT CARDS
        ============================== */

        .vip-box {
          width: 100%;
          padding: clamp(22px, 3vw, 36px);
          border-radius: 16px;
          line-height: 1.85;
          font-size: 17px;
          margin: 0 0 18px;
          border: 1px solid rgba(40,70,110,.06);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .vip-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(30,50,80,.08);
        }

        .vip-box h3 {
          color: #254f9d;
          font-size: clamp(21px, 2.2vw, 28px);
          font-weight: normal;
          margin: 0 0 18px;
        }


        /* ==============================
           BULLET LISTS
        ============================== */

        .vip-list {
          padding-left: 1.4em;
          margin: 0;
          list-style: disc;
        }

        .vip-list li {
          padding-left: .15em;
          margin: 0 0 10px;
          line-height: 1.7;
        }

        .vip-list li::marker {
          color: #345eaa;
        }


        /* ==============================
           CARD COLORS
        ============================== */

        .vip-pink {
          background: #fff0f1;
        }

        .vip-blue {
          background: #e8f3ff;
        }

        .vip-green {
          background: #edf7e9;
        }

        .vip-yellow {
          background: #fff6e4;
        }

        .vip-gray {
          background: #f3f6f9;
        }


        /* ==============================
           SPINACH SOUP IMAGE
        ============================== */

        .vip-image {
          display: block;
          width: 100%;
          height: auto;
          margin: 24px auto 35px;
          border-radius: 18px;
          box-shadow: 0 14px 34px rgba(0,0,0,.12);
          transition: transform .3s ease;
        }

        .vip-image:hover {
          transform: scale(1.01);
        }


        /* ==============================
           YOUTUBE VIDEO
        ============================== */

        .vip-video {
          position: relative;
          width: 100%;
          max-width: 1600px;
          aspect-ratio: 16 / 9;
          margin: 30px auto 24px;
          background: #000000;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(0,0,0,.18);
        }

        .vip-video iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }


        /* ==============================
           DISCLAIMER
        ============================== */

        .vip-note {
          font-size: 15px;
          line-height: 1.8;
          color: #555555;
          padding: 26px;
          background: #f1f4f7;
          border-radius: 14px;
          border-left: 5px solid #345eaa;
        }


        /* ==============================
           RESPONSIVE DESIGN
        ============================== */

        @media (max-width: 760px) {

          .vip-page {
            padding-top: 110px;
          }

          .vip-container {
            padding: 0 12px;
          }

          .vip-heading {
            padding: 20px 5px 30px;
          }

          .vip-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .vip-section {
            border-radius: 14px;
          }

          .vip-section-title {
            padding: 20px 16px;
            font-size: 22px;
          }

          .vip-section-content {
            padding: 0 16px 24px;
          }

          .vip-box {
            padding: 22px 18px;
          }

          .vip-image {
            border-radius: 10px;
          }

          .vip-video {
            border-radius: 10px;
          }

          .vip-toolbar button {
            width: 100%;
            max-width: 280px;
          }
        }

      `}</style>


      {/* MAIN CONTENT CONTAINER */}

      <div className="vip-container">


        {/* VIP HEADER */}

        <header className="vip-heading">

          <h1>CCDC VIP</h1>

          <h2>From Anthony William: Medical Medium</h2>

          <hr className="vip-divider" />

          <p>
            Here's the information based on our discussion...
          </p>

        </header>


        {/* EXPAND AND COLLAPSE CONTROLS */}

        <div className="vip-toolbar">

          <button type="button" onClick={expandAll}>
            ＋ Expand All Sections
          </button>

          <button type="button" onClick={collapseAll}>
            − Collapse All Sections
          </button>

        </div>


        {/* =================================
            SPINACH SOUP RECIPE
        ================================= */}

        <Section
          title="Anthony William's Spinach Soup Recipe"
          id="spinach-soup"
        >

          <img
            className="vip-image"
            src="https://www.ccdc.love/uploads/1/2/5/2/125240560/screenshot-2022-12-16-134335_orig.png"
            alt="Spinach Soup Recipe"
          />

          <p>
            <strong>From Medical Medium:</strong> One of the amazing things
            about incorporating more fruits and vegetables into our diet
            is the way that our taste buds change, and we begin to crave
            more and more of these fresh ingredients over time. When you
            find yourself yearning for leafy greens and the benefits they
            provide, this easy-to-make, richly flavored soup is a great
            way to incorporate them into your day in an easily digestible
            form. With all of the minerals the spinach provides, you'll
            also help curb any cravings for the foods you know don't serve
            your health right now.
          </p>

          <h3>Spinach Soup Video</h3>

          <div className="vip-video">

            <iframe
              src="https://www.youtube.com/embed/f3NXy0QWGP4?rel=0"
              title="Spinach Soup Video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

          </div>

        </Section>


        {/* =================================
            LEMON / LIME WATER
        ================================= */}

        <Section
          title="Lemon / Lime Water"
          id="lemon-lime-water"
        >

          <div className="vip-grid">

            <div className="vip-box vip-yellow">

              <h3>For 16 oz.</h3>

              <List
                items={[
                  "16 oz. room temperature water",
                  "1 whole lemon or lime"
                ]}
              />

            </div>


            <div className="vip-box vip-green">

              <h3>For 32 oz. (1 liter)</h3>

              <List
                items={[
                  "32 oz. (1 liter) room temperature water",
                  "2 whole lemons or limes"
                ]}
              />

            </div>

          </div>

        </Section>


        {/* =================================
            LIVER RESCUE SMOOTHIE
        ================================= */}

        <Section
          title="Liver Rescue Smoothie"
          id="liver-rescue-smoothie"
        >

          <div className="vip-grid">

            <div className="vip-box vip-pink">

              <h3>Option A</h3>

              <List
                items={[
                  "2 bananas or 1/2 Maradol papaya, cubed",
                  "1/2 cup fresh, 1 packet frozen, or 2 tablespoons powdered red pitaya (dragon fruit)",
                  "2 cups fresh or frozen or 2 tablespoons powdered wild blueberries",
                  "1/2 cup water (optional)"
                ]}
              />

            </div>


            <div className="vip-box vip-pink">

              <h3>Option B</h3>

              <List
                items={[
                  "1 banana or 1/4 Maradol papaya, cubed",
                  "1 mango",
                  "1/2 cup fresh, 1 packet frozen, or 2 tablespoons powdered red pitaya (dragon fruit)",
                  "1 celery stalk",
                  "1/2 cup sprouts (any variety)",
                  "1/2 lime",
                  "1/2 cup water (optional)"
                ]}
              />

            </div>

          </div>


          <div className="vip-box vip-gray">

            <h3>Preparation</h3>

            <p>
              Combine all ingredients in a blender. Blend until smooth.
              If desired, stream in 1/2 cup of water until desired
              consistency is reached.
            </p>

          </div>

        </Section>


        {/* =================================
            HEAVY METAL DETOX SMOOTHIE
        ================================= */}

        <Section
          title="Heavy Metal Detox Smoothie"
          id="heavy-metal-detox-smoothie"
        >

          <div className="vip-grid">

            <div className="vip-box vip-blue">

              <h3>Ingredients</h3>

              <List
                items={[
                  "2 bananas",
                  "2 cups frozen or fresh wild blueberries or 2 tablespoons powdered wild blueberries",
                  "1 cup fresh cilantro",
                  "1 teaspoon barley grass juice powder",
                  "1 teaspoon spirulina",
                  "1 tablespoon Atlantic dulse",
                  "1 orange",
                  "1/2 to 1 cup water (optional)"
                ]}
              />

            </div>


            <div className="vip-box vip-green">

              <h3>Preparation</h3>

              <p>
                Combine the bananas, blueberries, cilantro, barley grass
                juice powder, spirulina, and Atlantic dulse with the juice
                of one orange in a high-speed blender and blend until
                smooth. Add up to 1 cup of water if a thinner consistency
                is desired. Serve and enjoy!
              </p>

            </div>

          </div>

        </Section>


        {/* =================================
            THE FATS TO AVOID
        ================================= */}

        <Section
          title="The Fats to Avoid"
          id="fats-to-avoid"
        >

          <div className="vip-box vip-yellow">

            <h3>Stay off radical fats for a little while.</h3>

            <p>
              Radical fats include nuts, seeds, nut butters such as
              peanut butter, oil, coconut, avocado, cacao, chocolate,
              olives, bones broth, and other animal proteins.
            </p>

            <p>
              For how long depends on what condition you're in.
            </p>

            <h3>As a reminder...</h3>

            <p>
              The fats to avoid/eliminate isn't forever; it's just until
              your body can heal and get back into balance.
            </p>

          </div>

        </Section>


        {/* =================================
            STREPTOCOCCUS FIGHTERS
        ================================= */}

        <Section
          title="Streptococcus Fighters"
          id="streptococcus-fighters"
        >

          <p>
            Bacteria called group A Streptococcus (group A strep) can
            cause many different infections. These infections range
            from minor illnesses to very serious and deadly diseases.
          </p>


          <div className="vip-grid">

            <div className="vip-box vip-green">

              <h3>Streptococcus fighters</h3>

              <List
                items={[
                  "Onion",
                  "Garlic",
                  "Aromatic herbs (sage, rosemary, oregano, thyme, etc.)",
                  "Vitamin C",
                  "Elderberry Syrup",
                  "Zinc",
                  "Goldenseal",
                  "Wheatgrass juice",
                  "Barely grass juice",
                  "Bananas",
                  "Berries",
                  "Spinach (raw)",
                  "Ginger",
                  "Arugula",
                  "Sweet potatoes",
                  "Kale",
                  "Winter squash",
                  "Turmeric",
                  "Celery juice",
                  "Cayenne pepper (or any hot peppers)",
                  "Raw honey (200K photochemical)",
                  "Lemon balm",
                  "Cats claw"
                ]}
              />

            </div>


            <div className="vip-box vip-pink">

              <h3>Streptococcus fuel</h3>

              <List
                items={[
                  "Eggs",
                  "Ghee",
                  "Dairy",
                  "Corn",
                  "Wheat, gluten, rye, barley",
                  "Canola oil"
                ]}
              />

            </div>

          </div>

        </Section>


        {/* =================================
            TROUBLE MAKER FOODS
        ================================= */}

        <Section
          title="Trouble Maker Foods"
          id="trouble-maker-foods"
        >

          <div className="vip-box vip-yellow">

            <List
              items={[
                "Caffeine",
                "Processed sugar",
                "Corn",
                "Gluten",
                "Eggs",
                "Dairy",
                "Soft drinks",
                "Pork",
                "Tuna",
                "Lamb",
                "Soy",
                "Vegetable oil, palm oil, canola oil, corn oil, safflower oil, soybean oil",
                "Vinegar (including apple cider vinegar)",
                "Alcohol",
                "Nutritional yeast (MSG)"
              ]}
            />

          </div>

        </Section>


        {/* =================================
            DISCLAIMER
        ================================= */}

        <Section
          title="Disclaimer"
          id="disclaimer"
        >

          <div className="vip-note">

            The dietary information on this page is reproduced from
            the supplied original source. It is not independently
            medically verified and is not a substitute for advice
            from a qualified healthcare professional.

          </div>

        </Section>


      </div>

    </main>
  );
}