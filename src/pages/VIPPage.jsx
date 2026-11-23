import { useEffect } from "react";

export default function VIPPage() {
  useEffect(() => {
    document.title = "CCDC VIP | Colorado Colonics";

    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }

    robots.content = "noindex, nofollow";

    return () => {
      robots.remove();
    };
  }, []);

  const List = ({ items }) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const Divider = () => <hr className="vip-divider" />;

  return (
    <main className="vip-page">

      <style>{`

        .vip-page {
          width: 100vw;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 0;
          padding: 140px 0 60px;
          background: #f8f7f4;
          color: #151e24;
          font-family: Georgia, serif;
          overflow-x: hidden;
        }

        .vip-page * {
          box-sizing: border-box;
        }

        .vip-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 5%;
        }

        .vip-heading {
          width: 100%;
          text-align: center;
          padding: 25px 20px 45px;
        }

        .vip-heading h1 {
          color: #2d5bb9;
          font-size: clamp(35px, 5vw, 65px);
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: Georgia, serif;
        }

        .vip-heading h2 {
          color: #2d5bb9;
          font-size: clamp(24px, 3vw, 42px);
          font-weight: normal;
          margin-bottom: 25px;
        }

        .vip-heading p {
          font-size: clamp(18px, 2vw, 30px);
          line-height: 1.7;
        }

        .vip-divider {
          border: none;
          border-top: 1px solid #b9b9b9;
          width: 100%;
          margin: 35px auto;
        }

        .vip-section {
          width: 100%;
          padding: 50px 5%;
          margin: 0 auto 30px;
          background: white;
        }

        .vip-section-title {
          text-align: center;
          font-size: clamp(24px, 3vw, 38px);
          color: #2d5bb9;
          margin-bottom: 30px;
          line-height: 1.5;
        }

        .vip-text {
          width: 100%;
          font-size: 18px;
          line-height: 2;
          color: #151e24;
        }

        .vip-image {
          display: block;
          width: 100%;
          max-width: 1200px;
          height: auto;
          margin: 30px auto;
          border-radius: 10px;
        }

        .vip-image-link {
          display: block;
          width: 100%;
        }

        .vip-video {
          width: 100%;
          max-width: 1400px;
          aspect-ratio: 16 / 9;
          margin: 40px auto;
        }

        .vip-video iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 12px;
        }

        .vip-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: 100%;
          gap: 30px;
        }

        .vip-box {
          width: 100%;
          padding: 35px;
          line-height: 2;
          font-size: 17px;
        }

        .vip-box h3 {
          text-align: center;
          color: #2d5bb9;
          font-size: 27px;
          margin-bottom: 25px;
        }

        .vip-pink {
          background: #f9e9e9;
        }

        .vip-blue {
          background: #dceef5;
        }

        .vip-green {
          background: #e8f1e1;
        }

        .vip-yellow {
          background: #fff1d8;
        }

        .vip-gray {
          background: #f1f1f1;
        }

        .vip-box ul {
          padding-left: 30px;
        }

        .vip-box li {
          margin-bottom: 8px;
        }

        .vip-link {
          display: inline-block;
          background: #2d5bb9;
          color: white;
          text-decoration: none;
          padding: 14px 25px;
          border-radius: 8px;
          font-size: 17px;
          margin-top: 20px;
        }

        .vip-link:hover {
          background: #173c65;
        }

        .vip-link-area {
          text-align: center;
          margin: 30px auto;
        }

        .vip-note {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          padding: 25px;
          background: #f1f1f1;
          margin-top: 25px;
        }

        @media (max-width: 768px) {

          .vip-page {
            padding-top: 120px;
          }

          .vip-container {
            padding: 0 15px;
          }

          .vip-section {
            padding: 30px 15px;
          }

          .vip-grid {
            grid-template-columns: 1fr;
          }

          .vip-box {
            padding: 25px 18px;
          }

          .vip-text {
            font-size: 16px;
          }

          .vip-heading {
            padding: 20px 10px 30px;
          }

          .vip-image {
            border-radius: 6px;
          }
        }

      `}</style>

      <div className="vip-container">

        {/* MAIN HEADING */}

        <header className="vip-heading">

          <h1>CCDC VIP</h1>

          <h2>From Anthony William: Medical Medium</h2>

          <Divider />

          <p>
            Here's the information based on our discussion...
          </p>

        </header>

        {/* SPINACH SOUP */}

        <section className="vip-section">

          <h2 className="vip-section-title">
            Anthony William's Spinach Soup Recipe
          </h2>

          <a
            className="vip-image-link"
            href="https://www.medicalmedium.com/blog/spinach-soup"
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              className="vip-image"
              src="https://www.ccdc.love/uploads/1/2/5/2/125240560/screenshot-2022-12-16-134335_orig.png"
              alt="Spinach Soup Recipe"
            />

          </a>

          <div className="vip-text">

            <p>
              <strong>From Medical Medium:</strong>{" "}
              One of the amazing things about incorporating more
              fruits and vegetables into our diet is the way that
              our taste buds change, and we begin to crave more
              and more of these fresh ingredients over time.
              When you find yourself yearning for leafy greens
              and the benefits they provide, this easy-to-make,
              richly flavored soup is a great way to incorporate
              them into your day in an easily digestible form.
              With all of the minerals the spinach provides,
              you'll also help curb any cravings for the foods
              you know don't serve your health right now.
            </p>

          </div>

          {/* SPINACH SOUP VIDEO */}

          <h2 className="vip-section-title">
            Spinach Soup Video
          </h2>

          <div className="vip-video">

            <iframe
              src="https://www.youtube.com/embed/f3NXy0QWGP4"
              title="Spinach Soup Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

          </div>

          <div className="vip-link-area">

            <a
              className="vip-link"
              href="https://www.medicalmedium.com/blog/spinach-soup"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Original Spinach Soup Recipe
            </a>

          </div>

        </section>

        {/* LEMON / LIME WATER */}

        <section className="vip-section">

          <h2 className="vip-section-title">
            Lemon / Lime Water
          </h2>

          <div className="vip-grid">

            <div className="vip-box vip-yellow">

              <h3>For 16 oz.</h3>

              <List items={[
                "16 oz. room temperature water",
                "1 whole lemon or lime"
              ]} />

            </div>

            <div className="vip-box vip-green">

              <h3>For 32 oz. (1 liter)</h3>

              <List items={[
                "32 oz. (1 liter) room temperature water",
                "2 whole lemons or limes"
              ]} />

            </div>

          </div>

        </section>

        {/* LIVER RESCUE SMOOTHIE */}

        <section className="vip-section">

          <h2 className="vip-section-title">
            Liver Rescue Smoothie
          </h2>

          <div className="vip-grid">

            <div className="vip-box vip-pink">

              <h3>Option A</h3>

              <List items={[
                "2 bananas or 1/2 Maradol papaya, cubed",
                "1/2 cup fresh, 1 packet frozen, or 2 tablespoons powdered red pitaya (dragon fruit)",
                "2 cups fresh or frozen or 2 tablespoons powdered wild blueberries",
                "1/2 cup water (optional)"
              ]} />

            </div>

            <div className="vip-box vip-pink">

              <h3>Option B</h3>

              <List items={[
                "1 banana or 1/4 Maradol papaya, cubed",
                "1 mango",
                "1/2 cup fresh, 1 packet frozen, or 2 tablespoons powdered red pitaya (dragon fruit)",
                "1 celery stalk",
                "1/2 cup sprouts (any variety)",
                "1/2 lime",
                "1/2 cup water (optional)"
              ]} />

            </div>

          </div>

          <div className="vip-box vip-gray">

            <p>
              Combine all ingredients in a blender. Blend until
              smooth. If desired, stream in 1/2 cup of water
              until desired consistency is reached.
            </p>

          </div>

        </section>

        {/* HEAVY METAL DETOX SMOOTHIE */}

        <section className="vip-section">

          <h2 className="vip-section-title">
            Heavy Metal Detox Smoothie
          </h2>

          <div className="vip-grid">

            <div className="vip-box vip-blue">

              <List items={[
                "2 bananas",
                "2 cups frozen or fresh wild blueberries or 2 tablespoons powdered wild blueberries",
                "1 cup fresh cilantro",
                "1 teaspoon barley grass juice powder",
                "1 teaspoon spirulina",
                "1 tablespoon Atlantic dulse",
                "1 orange",
                "1/2 to 1 cup water (optional)"
              ]} />

            </div>

            <div className="vip-box vip-green">

              <h3>Preparation</h3>

              <p>
                Combine the bananas, blueberries, cilantro,
                barley grass juice powder, spirulina, and
                Atlantic dulse with the juice of one orange
                in a high-speed blender and blend until smooth.
                Add up to 1 cup of water if a thinner
                consistency is desired. Serve and enjoy!
              </p>

            </div>

          </div>

        </section>

        {/* THE FATS TO AVOID */}

        <section className="vip-section">

          <h2 className="vip-section-title">
            The Fats to Avoid
          </h2>

          <div className="vip-box vip-yellow">

            <h3>Stay off radical fats for a little while.</h3>

            <p>
              Radical fats include nuts, seeds, nut butters such
              as peanut butter, oil, coconut, avocado, cacao,
              chocolate, olives, bones broth, and other animal
              proteins.
            </p>

            <p>
              For how long depends on what condition you're in.
            </p>

            <br />

            <h3>As a reminder...</h3>

            <p>
              The fats to avoid/eliminate isn't forever; it's
              just until your body can heal and get back into
              balance.
            </p>

          </div>

        </section>

        {/* STREPTOCOCCUS FIGHTERS */}

        <section className="vip-section">

          <h2 className="vip-section-title">
            Streptococcus Fighters
          </h2>

          <p className="vip-text">

            Bacteria called group A Streptococcus (group A strep)
            can cause many different infections. These infections
            range from minor illnesses to very serious and deadly
            diseases.

          </p>

          <div className="vip-grid">

            <div className="vip-box vip-green">

              <h3>Streptococcus fighters</h3>

              <List items={[
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
              ]} />

            </div>

            <div className="vip-box vip-pink">

              <h3>Streptococcus fuel</h3>

              <List items={[
                "Eggs",
                "Ghee",
                "Dairy",
                "Corn",
                "Wheat, gluten, rye, barley",
                "Canola oil"
              ]} />

            </div>

          </div>

        </section>

        {/* TROUBLE MAKER FOODS */}

        <section className="vip-section">

          <h2 className="vip-section-title">
            Trouble Maker Foods
          </h2>

          <div className="vip-box vip-yellow">

            <List items={[
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
            ]} />

          </div>

        </section>

        {/* DISCLAIMER */}

        <section className="vip-section">

          <h2 className="vip-section-title">
            Disclaimer
          </h2>

          <div className="vip-note">

            The dietary information on this page is reproduced
            from the supplied original source. It is not
            independently medically verified and is not a
            substitute for advice from a qualified healthcare
            professional.

          </div>

        </section>

      </div>

    </main>
  );
}