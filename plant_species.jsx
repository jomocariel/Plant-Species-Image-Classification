import { useState } from "react";

const plants = [
  {
    id: 1,
    commonName: "Goose Grass / Indian Goosegrass",
    scientificName: "Eleusine indica",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Eleusine_indica_-_Köhler–s_Medizinal-Pflanzen-214.jpg/400px-Eleusine_indica_-_Köhler–s_Medizinal-Pflanzen-214.jpg",
    description: "A tufted annual grass native to tropical Asia, now a widespread weed found in lawns, roadsides, and disturbed areas worldwide. It grows up to 60 cm tall with flat, smooth leaf blades and characteristic finger-like seed spikes arranged in a whorl at the top of the stem. Traditionally used in folk medicine for fevers, hypertension, and urinary problems.",
    family: "Poaceae",
    color: "#4a7c59"
  },
  {
    id: 2,
    commonName: "Physic Nut / Barbados Nut",
    scientificName: "Jatropha curcas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jatropha_curcas_fruits.jpg/400px-Jatropha_curcas_fruits.jpg",
    description: "A perennial shrub or small tree in the family Euphorbiaceae, growing 3–5 m tall. Native to the American tropics, it has large, pale green, deeply lobed leaves and produces small yellow-green flowers. The seeds yield a non-edible oil used for biodiesel. All parts of the plant are toxic if ingested. Widely planted in tropical regions as a biofuel crop and living fence.",
    family: "Euphorbiaceae",
    color: "#6b8f4e"
  },
  {
    id: 3,
    commonName: "Painted Nettle / Coleus",
    scientificName: "Plectranthus scutellarioides",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Coleus_scutellarioides_01.jpg/400px-Coleus_scutellarioides_01.jpg",
    description: "A tropical foliage plant celebrated for its stunning, variegated leaves that come in combinations of green, purple, red, pink, orange, and yellow. Native to Southeast Asia and Melanesia, it belongs to the mint family. It grows as a bushy annual or perennial up to 1 m tall. The leaves are broadly ovate with serrated margins. Widely grown as an ornamental plant in gardens and containers.",
    family: "Lamiaceae",
    color: "#8b4f8b"
  },
  {
    id: 4,
    commonName: "Red Mayana / Red Coleus",
    scientificName: "Coleus blumei (syn. Plectranthus scutellarioides var.)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Coleus_red.jpg/400px-Coleus_red.jpg",
    description: "A vibrant cultivar of the Coleus group with predominantly deep red to crimson foliage, often edged in green or yellow. Widely cultivated as an ornamental in the Philippines and throughout Southeast Asia. In Philippine folk medicine, the red-leaved variety (Mayana) is used topically for wounds, bruises, skin inflammation, and as a poultice for fever. A popular garden and indoor plant prized for its bold color.",
    family: "Lamiaceae",
    color: "#c0392b"
  },
  {
    id: 5,
    commonName: "Insulin Plant / Fiery Costus",
    scientificName: "Chamaecostus cuspidatus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Costus_igneus_-_Fiery_Costus.jpg/400px-Costus_igneus_-_Fiery_Costus.jpg",
    description: "A succulent-stemmed perennial herb native to Brazil, now widely cultivated in tropical Asia for its reputed medicinal properties. It grows 60–90 cm tall with spirally arranged, glossy green leaves with purple undersides. Orange-red flowers bloom at the stem tip. The leaves are commonly consumed in folk medicine to manage blood sugar levels in diabetic patients, earning it the nickname 'insulin plant.'",
    family: "Costaceae",
    color: "#e67e22"
  },
  {
    id: 6,
    commonName: "Jewels of Opar / Fame Flower",
    scientificName: "Talinum paniculatum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Talinum_paniculatum_flowers.jpg/400px-Talinum_paniculatum_flowers.jpg",
    description: "A fleshy perennial herb growing 30–90 cm tall, native to tropical Americas. It has succulent, bright green, oval leaves and bears delicate, tiny pink to red flowers on branching panicles. The seed capsules turn red-orange and are highly ornamental. In the Philippines and Southeast Asia, the leaves are eaten as a vegetable and the plant is used in folk medicine for its purported aphrodisiac and tonic properties.",
    family: "Talinaceae",
    color: "#e91e8c"
  },
  {
    id: 7,
    commonName: "Spiked False Elephant's Foot",
    scientificName: "Pseudelephantopus spicatus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pseudelephantopus_spicatus.jpg/400px-Pseudelephantopus_spicatus.jpg",
    description: "A perennial herb in the daisy family, native to tropical America but naturalized throughout Asia and Africa. It grows 30–80 cm tall with erect, branching stems and oblong, rough-textured leaves. Small white flower heads are arranged in spikes along the upper stems. Commonly found in disturbed habitats, roadsides, and open fields. Used in traditional medicine for treating coughs, wounds, and kidney ailments.",
    family: "Asteraceae",
    color: "#7f8c8d"
  },
  {
    id: 8,
    commonName: "Turmeric",
    scientificName: "Curcuma longa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Curcuma_longa_roots.jpg/400px-Curcuma_longa_roots.jpg",
    description: "A rhizomatous herbaceous perennial plant native to the Indian subcontinent and Southeast Asia. It grows 1–1.5 m tall with large, oblong, aromatic leaves and pale yellow flowers. The underground rhizome is the main product — vivid orange inside — and is the source of the spice turmeric. Rich in curcumin, it has powerful anti-inflammatory and antioxidant properties. Widely used in cooking, medicine, cosmetics, and as a natural dye.",
    family: "Zingiberaceae",
    color: "#f39c12"
  },
  {
    id: 9,
    commonName: "Chili Pepper",
    scientificName: "Capsicum spp.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Capsicum_annuum_3.jpg/400px-Capsicum_annuum_3.jpg",
    description: "A genus of flowering plants in the nightshade family, native to the Americas. Capsicum species produce fruit (commonly called peppers or chilis) that range from mild bell peppers to intensely hot varieties. The pungent heat is caused by capsaicin. Plants grow as annuals or short-lived perennials with white flowers and fleshy fruits. Extensively cultivated worldwide for culinary, medicinal, and ornamental uses.",
    family: "Solanaceae",
    color: "#e74c3c"
  },
  {
    id: 10,
    commonName: "Water Spinach / Kangkong",
    scientificName: "Ipomoea aquatica",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ipomoea_aquatica_-_köhler–s_medizinal-pflanzen-074.jpg/400px-Ipomoea_aquatica_-_köhler–s_medizinal-pflanzen-074.jpg",
    description: "A semi-aquatic tropical plant native to Southeast Asia and a staple leafy vegetable across the region. It has hollow, floating stems and arrow-shaped or lanceolate leaves. The plant produces attractive white or light purple funnel-shaped flowers. Kangkong thrives in water or moist soil and is one of the most commonly eaten vegetables in the Philippines, valued for its tender stems and leaves and high nutritional content.",
    family: "Convolvulaceae",
    color: "#27ae60"
  },
  {
    id: 11,
    commonName: "Jute / Saluyot",
    scientificName: "Corchorus spp.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Corchorus_olitorius.jpg/400px-Corchorus_olitorius.jpg",
    description: "A genus of about 40–100 species in the family Malvaceae, widely cultivated in tropical and subtropical regions. Corchorus olitorius and C. capsularis are the primary species grown for jute fiber — one of the world's most important natural fibers. In the Philippines, the leaves (Saluyot) are cooked as a nutritious vegetable, rich in vitamins and minerals. The plant grows 1–3 m tall with small yellow flowers and elongated seed capsules.",
    family: "Malvaceae",
    color: "#8e9b6e"
  },
  {
    id: 12,
    commonName: "Indian Spurge Tree / Holy Milk Hedge",
    scientificName: "Euphorbia neriifolia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Euphorbia_neriifolia_Blanco1.182.png/400px-Euphorbia_neriifolia_Blanco1.182.png",
    description: "A succulent shrub or small tree native to India, growing up to 6 m tall. It has a thick, cylindrical, distinctly segmented and spiny stem with fleshy, dark green leaves that drop during dry periods. The plant produces small yellow-green flowers. Like other euphorbias, it exudes a toxic milky latex. Used in traditional Ayurvedic and folk medicine for various ailments and as a living hedge in warm climates.",
    family: "Euphorbiaceae",
    color: "#5d8a3c"
  },
  {
    id: 13,
    commonName: "Kalanchoe / Panda Plant",
    scientificName: "Kalanchoe spp.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Kalanchoe_blossfeldiana.jpg/400px-Kalanchoe_blossfeldiana.jpg",
    description: "A large genus of about 125 succulent plants native to Madagascar and tropical Africa, belonging to the stonecrop family. Kalanchoes have thick, fleshy leaves often with scalloped edges and produce clusters of small, brightly colored flowers in red, orange, yellow, or white. They are popular houseplants valued for their long-lasting blooms. Some species (notably K. pinnata) are used in folk medicine for wounds, burns, inflammation, and as an immunostimulant.",
    family: "Crassulaceae",
    color: "#e74c3c"
  },
  {
    id: 14,
    commonName: "Sessile Joyweed / Alternanthera",
    scientificName: "Alternanthera sessilis",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Alternanthera_sessilis_W_IMG_2278.jpg/400px-Alternanthera_sessilis_W_IMG_2278.jpg",
    description: "A creeping perennial herb found in moist habitats across tropical and subtropical Asia. It has prostrate to ascending stems with opposite, narrow, lanceolate leaves that may be green or reddish. Small white flower heads cluster in the leaf axils. The plant is a common weed but also widely consumed as a leafy vegetable and used in folk medicine for eye ailments, liver conditions, headaches, and as a diuretic.",
    family: "Amaranthaceae",
    color: "#16a085"
  },
  {
    id: 15,
    commonName: "Tsaang Gubat / Wild Tea",
    scientificName: "Carmona retusa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Carmona_retusa.jpg/400px-Carmona_retusa.jpg",
    description: "A shrub native to Southeast Asia and one of the ten officially endorsed herbal medicines in the Philippines (approved by the DOH). It grows 1–5 m tall with small, dark green, rough-textured leaves and tiny white flowers. The leaves are brewed as a herbal tea used for stomach aches, diarrhea, flatulence, and as a mouthwash for dental hygiene. Clinical studies have confirmed its antibacterial and antispasmodic properties.",
    family: "Boraginaceae",
    color: "#2980b9"
  },
  {
    id: 16,
    commonName: "Wedelia / Bay Biscayne Creeper",
    scientificName: "Sphagneticola trilobata",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sphagneticola_trilobata_1.jpg/400px-Sphagneticola_trilobata_1.jpg",
    description: "A creeping, mat-forming perennial herb native to Central America and the Caribbean, now widely naturalized and often invasive in tropical Asia. It has succulent, lobed, dark green leaves and produces bright yellow daisy-like flowers year-round. It spreads aggressively via stolons. Used as a ground cover plant but considered an environmental weed in many tropical regions. Traditionally used to treat skin infections and inflammation.",
    family: "Asteraceae",
    color: "#f1c40f"
  },
  {
    id: 17,
    commonName: "Little Ironweed / Ash-colored Fleabane",
    scientificName: "Cyanthillium cinereum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Vernonia_cinerea_at_Kadavoor.jpg/400px-Vernonia_cinerea_at_Kadavoor.jpg",
    description: "A common annual or short-lived perennial herb found across tropical Africa, Asia, and Australia. It grows 20–80 cm tall with alternate, ovate, softly hairy leaves and bears small, purple to lilac composite flower heads. Often found along roadsides and in open waste ground. Widely used in traditional medicine across Asia for treating fever, malaria, urinary disorders, skin conditions, and cough.",
    family: "Asteraceae",
    color: "#9b59b6"
  },
  {
    id: 18,
    commonName: "Common Purslane / Verdolaga",
    scientificName: "Portulaca oleracea",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Portulaca_oleracea.jpg/400px-Portulaca_oleracea.jpg",
    description: "A succulent annual herb with a cosmopolitan distribution, one of the most widely distributed plants on Earth. It has reddish, prostrate stems with small, fleshy, spoon-shaped leaves and tiny yellow flowers that open only in the morning. Considered a weed in many places, it is also a highly nutritious edible plant — rich in omega-3 fatty acids, vitamins A, C, and E. Used in folk medicine for digestive ailments, inflammation, and wound healing.",
    family: "Portulacaceae",
    color: "#f39c12"
  },
  {
    id: 19,
    commonName: "Stone Breaker / Gale of the Wind",
    scientificName: "Phyllanthus niruri",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Phyllanthus_niruri_-_Stone_breaker.jpg/400px-Phyllanthus_niruri_-_Stone_breaker.jpg",
    description: "A tropical annual herb native to the Amazon rainforest, now found throughout tropical and subtropical regions worldwide. It grows 20–60 cm tall with numerous small, elliptical leaves arranged in two rows along the branches, creating a feather-like appearance. Tiny greenish flowers and fruits appear beneath the leaves. Renowned in herbal medicine for its ability to break down kidney and gallbladder stones, and also used for liver diseases, diabetes, and viral infections.",
    family: "Phyllanthaceae",
    color: "#1abc9c"
  },
  {
    id: 20,
    commonName: "Sweet Potato / Kamote",
    scientificName: "Ipomoea batatas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/400px-Ipomoea_batatas_006.JPG",
    description: "A major root crop and vegetable native to tropical America, now cultivated worldwide as a food staple. A member of the morning glory family, it produces long, trailing vines with heart-shaped to lobed leaves and funnel-shaped purple or white flowers. The starchy, sweet tuberous roots vary in flesh color from white to deep orange or purple. Both the roots and young leaves are edible and highly nutritious. One of the most important food crops in the Philippines.",
    family: "Convolvulaceae",
    color: "#8e44ad"
  }
];

export default function PlantSpecies() {
  const [selected, setSelected] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #f5f0e8 0%, #e8f0e8 50%, #f0e8f5 100%)",
      minHeight: "100vh",
      padding: "2rem 1rem"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        
        * { box-sizing: border-box; }
        
        .header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .header h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: #2c4a2e;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
        }
        .header p {
          font-family: 'Lato', sans-serif;
          font-weight: 300;
          color: #666;
          font-size: 1.05rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #4a7c59, #8b4f8b);
          margin: 1rem auto;
          border-radius: 2px;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        .card-number {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(0,0,0,0.5);
          color: white;
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          z-index: 2;
        }
        .card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          background: #e8f0e8;
        }
        .card-img-placeholder {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          background: linear-gradient(135deg, #e8f0e8, #f5f0e8);
        }
        .card-body {
          padding: 1.2rem;
        }
        .card-common {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #2c4a2e;
          margin: 0 0 0.25rem 0;
        }
        .card-sci {
          font-family: 'Lato', sans-serif;
          font-style: italic;
          font-size: 0.82rem;
          color: #888;
          margin: 0 0 0.5rem 0;
        }
        .card-family-tag {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 20px;
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: white;
          margin-bottom: 0.7rem;
        }
        .card-desc {
          font-family: 'Lato', sans-serif;
          font-size: 0.85rem;
          color: #555;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .read-more {
          font-family: 'Lato', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 0.7rem;
          opacity: 0.6;
        }
        
        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .modal {
          background: white;
          border-radius: 16px;
          max-width: 640px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: slideUp 0.25s ease;
        }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        .modal-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 16px 16px 0 0;
        }
        .modal-img-placeholder {
          width: 100%;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          border-radius: 16px 16px 0 0;
          background: linear-gradient(135deg, #e8f0e8, #f5f0e8);
        }
        .modal-body {
          padding: 1.8rem;
        }
        .modal-number {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 0.4rem;
        }
        .modal-common {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: #2c4a2e;
          margin: 0 0 0.3rem 0;
          line-height: 1.2;
        }
        .modal-sci {
          font-family: 'Lato', sans-serif;
          font-style: italic;
          font-size: 1rem;
          color: #888;
          margin-bottom: 1rem;
        }
        .modal-desc {
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          color: #444;
          line-height: 1.75;
        }
        .modal-meta {
          display: flex;
          gap: 1rem;
          margin-top: 1.2rem;
          flex-wrap: wrap;
        }
        .meta-item {
          font-family: 'Lato', sans-serif;
          font-size: 0.82rem;
          color: #666;
        }
        .meta-label {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.72rem;
          color: #aaa;
          display: block;
        }
        .close-btn {
          position: absolute;
          top: 12px;
          right: 16px;
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .modal-wrapper { position: relative; }
      `}</style>

      <div className="header">
        <p>Plant Species Section</p>
        <div className="divider" />
        <h1>Flora Reference Guide</h1>
        <p>20 Documented Plant Species</p>
      </div>

      <div className="grid">
        {plants.map((plant) => (
          <div key={plant.id} className="card" onClick={() => setSelected(plant)}>
            <div className="card-number">#{String(plant.id).padStart(2, '0')}</div>
            {imgErrors[plant.id] ? (
              <div className="card-img-placeholder">🌿</div>
            ) : (
              <img
                className="card-img"
                src={plant.image}
                alt={plant.commonName}
                onError={() => handleImgError(plant.id)}
              />
            )}
            <div className="card-body">
              <p className="card-common">{plant.commonName}</p>
              <p className="card-sci">{plant.scientificName}</p>
              <span
                className="card-family-tag"
                style={{ background: plant.color }}
              >
                {plant.family}
              </span>
              <p className="card-desc">{plant.description}</p>
              <p className="read-more" style={{ color: plant.color }}>Click to read more →</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal modal-wrapper" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>✕</button>
            {imgErrors[selected.id] ? (
              <div
                className="modal-img-placeholder"
                style={{ background: `linear-gradient(135deg, ${selected.color}22, ${selected.color}44)` }}
              >
                🌿
              </div>
            ) : (
              <img
                className="modal-img"
                src={selected.image}
                alt={selected.commonName}
                onError={() => handleImgError(selected.id)}
              />
            )}
            <div className="modal-body">
              <div className="modal-number">Plant #{String(selected.id).padStart(2, '0')}</div>
              <h2 className="modal-common">{selected.commonName}</h2>
              <p className="modal-sci">{selected.scientificName}</p>
              <span
                className="card-family-tag"
                style={{ background: selected.color, marginBottom: "1rem", display: "inline-block" }}
              >
                Family: {selected.family}
              </span>
              <p className="modal-desc">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
