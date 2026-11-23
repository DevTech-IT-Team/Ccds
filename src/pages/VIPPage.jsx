import { useEffect } from "react";

// Reusable component for bullet lists
const List = ({ items }) => (
  <ul className="vip-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Reusable section component (always visible)
const Section = ({ title, children, id }) => (
  <section className="vip-section" id={id}>
    <h2 className="vip-section-title">{title}</h2>
    <div className="vip-section-content">{children}</div>
  </section>
);

// Main VIP Page Component
export default function VIPPage() {
  // Page title and SEO metadata
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

  return (
    <main className="vip-page">
      <style>{`

        /* ==============================
           COLOR PALETTE
        ============================== */

        .vip-page {
          --vip-primary: #254f9d;
          --vip-primary-dark: #183a78;
          --vip-primary-light: #eaf1fb;
          --vip-text: #263445;
          --vip-muted: #627184;
          --vip-border: #d5dfeb;
          --vip-background: #f7f9fc;

          width: 100%;
          min-height: 100vh;
          padding: clamp(110px, 12vw, 150px) 0 70px;
          background: var(--vip-background);
          color: var(--vip-text);
          font-family: Georgia, serif;
          overflow-x: hidden;
        }

        .vip-page * {
          box-sizing: border-box;
        }

        /* ==============================
           MAIN CONTAINER
        ============================== */

        .vip-container {
          width: 100%;
          margin: 0;
          padding: 0 clamp(16px, 5vw, 80px);
        }

        /* ==============================
           HEADER
        ============================== */

        .vip-heading {
          text-align: center;
          padding: 30px 12px 42px;
        }

        .vip-heading h1 {
          color: var(--vip-primary);
          font-size: clamp(40px, 6vw, 76px);
          line-height: 1.1;
          margin: 0 0 18px;
          letter-spacing: .04em;
          font-weight: normal;
        }

        .vip-heading h2 {
          color: var(--vip-primary);
          font-size: clamp(22px, 3vw, 40px);
          font-weight: normal;
          line-height: 1.3;
          margin: 0 0 18px;
        }

        .vip-heading p {
          font-size: clamp(17px, 2vw, 24px);
          line-height: 1.7;
          margin: 0;
          color: var(--vip-muted);
        }

        .vip-divider {
          border: 0;
          border-top: 1px solid var(--vip-border);
          width: 100%;
          margin: 32px auto;
        }

        /* ==============================
           SECTION HEADINGS
        ============================== */

        .vip-section {
          width: 100%;
          margin: 0 auto;
          padding: 0;
          border-bottom: 1px solid var(--vip-border);
        }

        .vip-section-title {
          color: var(--vip-primary);
          font-size: clamp(24px, 3vw, 38px);
          font-weight: normal;
          line-height: 1.4;
          margin: 0;
          padding: 30px 20px 15px;
          border-left: 4px solid var(--vip-primary);
        }

        /* ==============================
           SECTION CONTENT
        ============================== */

        .vip-section-content {
          padding: 20px 20px 40px;
          font-size: clamp(16px, 1.45vw, 19px);
          line-height: 1.85;
          background: transparent;
        }

        .vip-section-content p {
          margin: 0 0 20px;
        }

        /* ==============================
           PLAIN LAYOUT
        ============================== */

        .vip-grid {
          display: block;
          width: 100%;
        }

        .vip-box {
          display: block;
          width: 100%;
          padding: 25px 0;
          margin: 0;
          border: none;
          border-radius: 0;
          box-shadow: none;
          background: transparent !important;
          font-size: 17px;
          line-height: 1.85;
        }

        .vip-box h3 {
          color: var(--vip-primary);
          font-size: clamp(21px, 2.2vw, 28px);
          font-weight: normal;
          margin: 0 0 20px;
        }

        /* ==============================
           BULLET LISTS
        ============================== */

        .vip-list {
          padding-left: 28px;
          margin: 0;
          list-style: disc;
        }

        .vip-list li {
          padding-left: 5px;
          margin-bottom: 12px;
          line-height: 1.8;
        }

        .vip-list li::marker {
          color: var(--vip-primary);
        }

        /* ==============================
           REMOVE COLORED CONTAINERS
        ============================== */

        .vip-pink,
        .vip-blue,
        .vip-green,
        .vip-yellow,
        .vip-gray {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }

        /* ==============================
           IMAGE
        ============================== */

        .vip-image {
          display: block;
          width: 100%;
          max-width: 100%;
          height: auto;
          margin: 25px auto 35px;
          border-radius: 0;
          box-shadow: none;
        }

        /* ==============================
           VIDEO BUTTON
        ============================== */

        .vip-video-button-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 35px 0;
        }

        .vip-youtube-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 17px 32px;
          background: var(--vip-primary);
          color: white;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 17px;
          font-weight: bold;
          border-radius: 40px;
          border: 1px solid var(--vip-primary);
          transition: all .25s ease;
        }

        .vip-youtube-button:hover {
          background: var(--vip-primary-dark);
          color: white;
          transform: translateY(-2px);
        }

        .vip-youtube-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background: white;
          color: var(--vip-primary);
          border-radius: 50%;
          font-size: 15px;
        }

        /* ==============================
           DISCLAIMER
        ============================== */

        .vip-note {
          width: 100%;
          padding: 20px 0;
          margin: 0;
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          color: var(--vip-muted);
          font-size: 15px;
          line-height: 1.8;
        }

        /* ==============================
           RESPONSIVE DESIGN
        ============================== */

        @media (max-width: 760px) {

          .vip-page {
            padding-top: 110px;
          }

          .vip-container {
            padding: 0 15px;
          }

          .vip-heading {
            padding: 20px 5px 30px;
          }

          .vip-section-title {
            padding: 25px 12px 12px;
            font-size: 25px;
          }

          .vip-section-content {
            padding: 20px 12px 30px;
          }

          .vip-box {
            padding: 20px 0;
          }

          .vip-youtube-button {
            width: 100%;
            font-size: 16px;
            padding: 16px 20px;
          }

          .vip-list {
            padding-left: 22px;
          }
        }

        @media (max-width: 480px) {

          .vip-heading h1 {
            font-size: 36px;
          }

          .vip-heading h2 {
            font-size: 23px;
          }

          .vip-section-title {
            font-size: 22px;
          }

          .vip-section-content {
            font-size: 16px;
          }
        }

      `}</style>

      {/* MAIN CONTENT */}

      <div className="vip-container">

        {/* HEADER */}

        <header className="vip-heading">

          <h1>CCDC VIP</h1>

          <h2>From Anthony William: Medical Medium</h2>

          <hr className="vip-divider" />

          <p>
            Here's the information based on our discussion...
          </p>

        </header>

        {/* SPINACH SOUP */}

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

          <div className="vip-video-button-wrapper">

            <a
              className="vip-youtube-button"
              href="https://www.youtube.com/watch?v=f3NXy0QWGP4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="vip-youtube-icon">▶</span>
              Watch Spinach Soup Video
            </a>

          </div>

        </Section>

        {/* LEMON / LIME WATER */}

        <Section
          title="Lemon / Lime Water"
          id="lemon-lime-water"
        >

          <div className="vip-box">

            <h3>For 16 oz.</h3>

            <List
              items={[
                "16 oz. room temperature water",
                "1 whole lemon or lime"
              ]}
            />

          </div>

          <div className="vip-box">

            <h3>For 32 oz. (1 liter)</h3>

            <List
              items={[
                "32 oz. (1 liter) room temperature water",
                "2 whole lemons or limes"
              ]}
            />

          </div>

        </Section>

        {/* LIVER RESCUE SMOOTHIE */}

        <Section
          title="Liver Rescue Smoothie"
          id="liver-rescue-smoothie"
        >

          <div className="vip-box">

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

          <div className="vip-box">

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

          <div className="vip-box">

            <h3>Preparation</h3>

            <p>
              Combine all ingredients in a blender. Blend until smooth.
              If desired, stream in 1/2 cup of water until desired
              consistency is reached.
            </p>

          </div>

        </Section>

        {/* HEAVY METAL DETOX SMOOTHIE */}

        <Section
          title="Heavy Metal Detox Smoothie"
          id="heavy-metal-detox-smoothie"
        >

          <div className="vip-box">

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

          <div className="vip-box">

            <h3>Preparation</h3>

            <p>
              Combine the bananas, blueberries, cilantro, barley grass
              juice powder, spirulina, and Atlantic dulse with the juice
              of one orange in a high-speed blender and blend until
              smooth. Add up to 1 cup of water if a thinner consistency
              is desired. Serve and enjoy!
            </p>

          </div>

        </Section>

        {/* THE FATS TO AVOID */}

        <Section
          title="The Fats to Avoid"
          id="fats-to-avoid"
        >

          <div className="vip-box">

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

        {/* STREPTOCOCCUS FIGHTERS */}

        <Section
          title="Streptococcus Fighters"
          id="streptococcus-fighters"
        >

          <p>
            Bacteria called group A Streptococcus (group A strep) can
            cause many different infections. These infections range
            from minor illnesses to very serious and deadly diseases.
          </p>

          <div className="vip-box">

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

          <div className="vip-box">

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

        </Section>

        {/* TROUBLE MAKER FOODS */}

        <Section
          title="Trouble Maker Foods"
          id="trouble-maker-foods"
        >

          <div className="vip-box">

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

        {/* DISCLAIMER */}

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