import type { Category } from "@/data/categories";
import { categories, getCategoryBySlug } from "@/data/categories";

export type ProductStyle = {
  title: string;
  slug: string;
  description: string;
  categorySlug: string;
  image: string;
  fallbackImage: string;
  galleryImages: string[];
  useCases: string[];
  materialOptions: string[];
  finishOptions: string[];
  relatedProducts: string[];
  badge: string;
  overview: string;
  dimensionsCopy: string;
  keyHighlights: string[];
  faq: Array<{ question: string; answer: string }>;
};

type StyleSeed = {
  title: string;
  description: string;
  badge: string;
  useCases?: string[];
};

const styleSeedsByCategory: Record<string, StyleSeed[]> = {
  "rigid-boxes": [
    {
      title: "Magnetic Closure Box",
      description: "A presentation-first rigid structure with a cleaner reveal and stronger keepsake feel.",
      badge: "Gift-focused",
      useCases: ["Beauty launches", "Premium gifting", "Jewelry sets"],
    },
    {
      title: "Two Piece Rigid Box",
      description: "Classic lid-and-base structure that feels substantial, calm, and unmistakably premium.",
      badge: "Retail-ready",
      useCases: ["Retail presentation", "Collector sets", "Product launches"],
    },
    {
      title: "Shoulder Neck Box",
      description: "A layered rigid format that adds presence and a more architectural opening sequence.",
      badge: "Premium finish friendly",
      useCases: ["Fragrance", "Luxury gifting", "Launch kits"],
    },
    {
      title: "Drawer Style Box",
      description: "A sliding reveal format suited to keepsake products, jewelry, and compact premium sets.",
      badge: "Insert compatible",
      useCases: ["Jewelry", "Accessories", "Premium samples"],
    },
    {
      title: "Book Style Box",
      description: "Elegant hinged construction that supports storytelling and ceremonial presentation.",
      badge: "Story-led",
      useCases: ["Campaign kits", "Press mailers", "Collector editions"],
    },
    {
      title: "Lid and Base Box",
      description: "A timeless rigid format balancing premium presentation with practical structure.",
      badge: "Signature style",
      useCases: ["Beauty gifting", "Retail shelf", "Luxury packaging"],
    },
    {
      title: "Collapsible Rigid Box",
      description: "A cost-efficient rigid structure that flat-packs for storage and shipping without losing premium feel.",
      badge: "Space-efficient",
      useCases: ["E-commerce gifting", "Subscription brands", "DTC launches"],
    },
    {
      title: "Round Rigid Box",
      description: "A cylindrical rigid format for products where the unexpected shape creates its own presence.",
      badge: "Distinctive",
      useCases: ["Candles", "Jewelry", "Premium food"],
    },
    {
      title: "Rigid Hamper Box",
      description: "A deep-structure rigid box built for multi-product hampers, seasonal gifting, and luxury bundle sets.",
      badge: "Multi-product",
      useCases: ["Holiday hampers", "Gift sets", "Corporate gifting"],
    },
    {
      title: "Watch Box",
      description: "A precision-fit rigid format for timepieces that need a secure, premium, and keepsake-quality reveal.",
      badge: "Precision fit",
      useCases: ["Watches", "Luxury accessories", "Gift sets"],
    },
    {
      title: "Rigid Apparel Box",
      description: "A flat-profile rigid structure suited to folded garments, accessories, and boutique fashion arrivals.",
      badge: "Fashion-ready",
      useCases: ["Clothing", "Scarves", "Boutique retail"],
    },
    {
      title: "Candle Rigid Box",
      description: "An elevated rigid format for premium candle collections with stronger gifting and retail presence.",
      badge: "Home fragrance",
      useCases: ["Premium candles", "Gifting", "Retail launch"],
    },
    {
      title: "Tea Rigid Gift Box",
      description: "A structured rigid format for specialty tea collections and premium beverage gifting.",
      badge: "Beverage gifting",
      useCases: ["Specialty tea", "Coffee gifting", "Holiday sets"],
    },
    {
      title: "Wine Gift Box",
      description: "A robust rigid structure designed for single or double wine bottle gifting presentation.",
      badge: "Beverage gifting",
      useCases: ["Wine gifting", "Spirits", "Corporate gifts"],
    },
    {
      title: "Tech Gift Box",
      description: "A clean, structured rigid box for electronics accessories and tech product gifting.",
      badge: "Electronics",
      useCases: ["Tech accessories", "Corporate gifting", "Product launches"],
    },
    {
      title: "Baby Gift Box",
      description: "A soft-finish rigid box designed for baby gifting sets, newborn hampers, and shower gifts.",
      badge: "Gifting",
      useCases: ["Baby shower", "Newborn gifts", "Luxury gifting"],
    },
    {
      title: "Hinged Rigid Box",
      description: "A one-piece hinged format that opens with a single smooth motion — ideal for ceremonial reveals.",
      badge: "Ceremonial",
      useCases: ["Jewelry launches", "Collector editions", "Premium gifting"],
    },
    {
      title: "Premium Cosmetic Box",
      description: "A tactile rigid format for beauty brands that want stronger presence at gifting and retail level.",
      badge: "Beauty-led",
      useCases: ["Cosmetic sets", "Skincare gifting", "Beauty launches"],
    },
    {
      title: "Jewelry Gift Set Box",
      description: "A rigid gift box built to hold coordinated jewelry sets with precise insert support.",
      badge: "Jewelry",
      useCases: ["Jewelry sets", "Gifting", "Engagement gifts"],
    },
    {
      title: "Sunglasses Rigid Box",
      description: "A structured rigid format for premium eyewear brands that need a secure, branded arrival experience.",
      badge: "Eyewear",
      useCases: ["Sunglasses", "Luxury eyewear", "Gift sets"],
    },
  ],
  "mailer-boxes": [
    {
      title: "Roll End Tuck Front Mailer",
      description: "A clean self-locking mailer built for stronger brand presentation in transit.",
      badge: "DTC-ready",
      useCases: ["E-commerce", "Subscription drops", "Launch sends"],
    },
    {
      title: "Subscription Mailer",
      description: "Structured for repeat deliveries where presentation and consistency both matter.",
      badge: "Repeat delivery",
      useCases: ["Subscription brands", "Monthly drops", "Retention kits"],
    },
    {
      title: "E-commerce Mailer",
      description: "Shipping-first structure that still keeps the unboxing experience feeling elevated.",
      badge: "Shipping support",
      useCases: ["Online orders", "DTC brands", "Launch fulfilment"],
    },
    {
      title: "Kraft Mailer",
      description: "A restrained tactile direction with a more natural and premium visual tone.",
      badge: "Eco-conscious",
      useCases: ["Minimal brands", "Lower-ink systems", "Sustainable lines"],
    },
    {
      title: "Printed Mailer",
      description: "Exterior and interior print opportunities for a more memorable branded arrival.",
      badge: "Brand-led",
      useCases: ["Campaign mailers", "Premium DTC", "Interior print"],
    },
    {
      title: "Insert Mailer",
      description: "Mailer system built around added support, insert fit, and cleaner product organization.",
      badge: "Insert compatible",
      useCases: ["Fragile products", "Beauty sets", "Jar support"],
    },
    {
      title: "Black Mailer Box",
      description: "A bold, premium mailer format in flat black with strong visual impact for modern DTC brands.",
      badge: "Bold brand",
      useCases: ["Premium DTC", "Fashion brands", "Tech accessories"],
    },
    {
      title: "White Mailer Box",
      description: "A clean, minimal mailer direction suited to beauty, wellness, and editorial brand aesthetics.",
      badge: "Clean aesthetic",
      useCases: ["Beauty brands", "Wellness", "Editorial brands"],
    },
    {
      title: "Two-Piece Mailer",
      description: "A lid-and-base mailer format that gives a stronger unboxing sequence than a standard auto-lock.",
      badge: "Premium reveal",
      useCases: ["Premium DTC", "Launch kits", "Gift sends"],
    },
    {
      title: "Heavy Duty Mailer",
      description: "A reinforced corrugated mailer built for heavier products that still need a premium exterior.",
      badge: "Heavy product",
      useCases: ["Fragile goods", "Heavy products", "Bulky DTC orders"],
    },
    {
      title: "Influencer Mailer Set",
      description: "A curated mailer system designed for influencer drops and campaign gifting with high visual impact.",
      badge: "Campaign",
      useCases: ["Influencer gifting", "PR kits", "Campaign launches"],
    },
    {
      title: "Holiday Mailer Box",
      description: "Seasonal mailer packaging for holiday campaigns, gift drops, and limited-edition product sends.",
      badge: "Seasonal",
      useCases: ["Holiday launches", "Christmas drops", "Gift season"],
    },
    {
      title: "Campaign Mailer Box",
      description: "A mailer format designed for campaign drops with strong exterior print and interior brand storytelling.",
      badge: "Campaign-led",
      useCases: ["Brand campaigns", "Product drops", "Retail partnerships"],
    },
    {
      title: "Mini Mailer Box",
      description: "A compact mailer format for small products, accessories, and samples that still need a premium send.",
      badge: "Compact",
      useCases: ["Samples", "Accessories", "Small DTC orders"],
    },
    {
      title: "Large Mailer Box",
      description: "An oversized mailer structure for multi-product sets, hampers, and larger DTC orders.",
      badge: "Large format",
      useCases: ["Multi-product sets", "Hampers", "Large orders"],
    },
    {
      title: "Luxury Black Mailer",
      description: "A premium black corrugated mailer with interior print for brands that want maximum impact at arrival.",
      badge: "Luxury DTC",
      useCases: ["Luxury brands", "Gift sends", "Premium DTC"],
    },
    {
      title: "Interior Print Mailer",
      description: "A mailer with full interior print to create a richer brand reveal the moment the customer opens the box.",
      badge: "Interior brand",
      useCases: ["DTC brands", "Campaign sends", "Subscription boxes"],
    },
    {
      title: "Cosmetic Mailer Box",
      description: "A beauty-specific mailer format sized for skincare and cosmetic sets with interior print options.",
      badge: "Beauty DTC",
      useCases: ["Skincare brands", "Beauty boxes", "DTC beauty"],
    },
    {
      title: "Eco Mailer Box",
      description: "A sustainable corrugated mailer made from recycled content with water-based print inks.",
      badge: "Eco-conscious",
      useCases: ["Sustainable brands", "Eco-DTC", "Green shipping"],
    },
    {
      title: "Candle Mailer Box",
      description: "A structured mailer designed for candle jar protection with clean exterior presentation.",
      badge: "Candle shipping",
      useCases: ["Candle DTC", "Home fragrance", "Candle gifting"],
    },
  ],
  "folding-cartons": [
    {
      title: "Reverse Tuck End",
      description: "A versatile folding carton style suited to premium retail products and cleaner shelf presentation.",
      badge: "Shelf ready",
      useCases: ["Cosmetics", "Food packaging", "Wellness"],
    },
    {
      title: "Straight Tuck End",
      description: "A streamlined carton structure with a polished look and efficient opening style.",
      badge: "Retail classic",
      useCases: ["Beauty products", "Confectionery", "Premium cartons"],
    },
    {
      title: "Auto-Lock Bottom",
      description: "Adds extra base support for products that need stronger structure without losing elegance.",
      badge: "Protection",
      useCases: ["Heavier products", "Retail packs", "Gourmet goods"],
    },
    {
      title: "Sleeve Carton",
      description: "A layered carton direction that adds hierarchy and campaign flexibility to a base structure.",
      badge: "Seasonal",
      useCases: ["Limited editions", "Launch packaging", "Gift sleeves"],
    },
    {
      title: "Cream Box Carton",
      description: "A precision-fit folding carton for face and body cream products with strong shelf appeal.",
      badge: "Beauty",
      useCases: ["Face creams", "Body lotions", "Skincare retail"],
    },
    {
      title: "Vitamin Carton",
      description: "A clean carton format for supplement bottles and vitamin packaging with compliance panel space.",
      badge: "Supplement",
      useCases: ["Vitamins", "Supplements", "Health retail"],
    },
    {
      title: "Lip Balm Carton",
      description: "A small-format carton designed for lip balm tubes, sticks, and compact beauty products.",
      badge: "Compact",
      useCases: ["Lip care", "Lip balms", "Compact beauty"],
    },
    {
      title: "Foundation Box",
      description: "A cosmetic carton format for liquid foundation, BB cream, and tinted skincare products.",
      badge: "Cosmetic",
      useCases: ["Foundation", "BB cream", "Cosmetic retail"],
    },
    {
      title: "Tea Carton",
      description: "A branded carton format for specialty tea bags, loose-leaf sachets, and premium beverage products.",
      badge: "Beverage",
      useCases: ["Specialty tea", "Tea retail", "Gift tea"],
    },
    {
      title: "Coffee Carton",
      description: "A carton direction for specialty coffee pods, ground coffee packets, and premium cafe products.",
      badge: "Coffee",
      useCases: ["Coffee pods", "Specialty coffee", "Café retail"],
    },
    {
      title: "Supplement Carton",
      description: "A professional carton format for supplement capsules, tablets, and health product ranges.",
      badge: "Health",
      useCases: ["Capsules", "Tablets", "Supplement retail"],
    },
    {
      title: "Pet Food Carton",
      description: "A food-grade carton for dry pet food, treats, and specialty pet nutrition brands.",
      badge: "Pet",
      useCases: ["Pet food", "Dog treats", "Pet retail"],
    },
    {
      title: "Bath Bomb Carton",
      description: "A retail carton sized for bath bombs with window or enclosed formats for boutique presentation.",
      badge: "Bath & body",
      useCases: ["Bath bombs", "Spa retail", "Gift products"],
    },
    {
      title: "Candle Carton",
      description: "A clean retail carton for candle jars and tins suited to boutique, spa, and home goods shelves.",
      badge: "Home fragrance",
      useCases: ["Candle jars", "Home fragrance", "Boutique retail"],
    },
    {
      title: "Bakery Carton",
      description: "A food-grade folding carton for artisan baked goods, pastries, and specialty food retail.",
      badge: "Food",
      useCases: ["Artisan baking", "Specialty food", "Pastry retail"],
    },
    {
      title: "Snack Carton",
      description: "A compact folding carton for snack bars, protein bars, and on-the-go food products.",
      badge: "Snack",
      useCases: ["Snack brands", "Protein bars", "On-the-go food"],
    },
    {
      title: "Mascara Box",
      description: "A premium cosmetic carton for mascara tubes with a clean finish and strong beauty branding.",
      badge: "Cosmetic",
      useCases: ["Mascara", "Eye makeup", "Beauty retail"],
    },
    {
      title: "Eyeshadow Carton",
      description: "A compact carton format for eyeshadow palettes, eye products, and specialty beauty kits.",
      badge: "Makeup",
      useCases: ["Eyeshadow", "Eye palettes", "Makeup retail"],
    },
    {
      title: "Toy Box Carton",
      description: "A fun, structured carton format for small toys, games, and children's retail products.",
      badge: "Kids",
      useCases: ["Toys", "Games", "Kids retail"],
    },
    {
      title: "Cereal Box",
      description: "A classic folding carton format scaled and structured for breakfast cereal and grain products.",
      badge: "Food",
      useCases: ["Cereal", "Grains", "Breakfast food"],
    },
  ],
  "product-boxes": [
    {
      title: "Retail Product Box",
      description: "A flexible premium structure for shelf-ready presentation across multiple SKUs.",
      badge: "Retail-ready",
      useCases: ["Retail shelves", "Beauty", "Food"],
    },
    {
      title: "Gift-Ready Box",
      description: "A stronger presentation route for products that need a more elevated first impression.",
      badge: "Gift-focused",
      useCases: ["Premium gifting", "Seasonal drops", "Launches"],
    },
    {
      title: "Launch Set Box",
      description: "Supports product bundles, PR kits, and campaign-led packaging systems.",
      badge: "Launch kits",
      useCases: ["Press kits", "Multi-product sets", "Campaign sends"],
    },
    {
      title: "Protective Branded Box",
      description: "Balances direct-to-consumer protection with cleaner outside presentation.",
      badge: "Hybrid use",
      useCases: ["Shipping + retail", "Premium DTC", "Protective presentation"],
    },
    {
      title: "Insert-Led Product Box",
      description: "Built around more precise fit, internal support, and premium organization.",
      badge: "Insert compatible",
      useCases: ["Bottle support", "Multi-item kits", "Luxury presentation"],
    },
    {
      title: "Multi-SKU Packaging Family",
      description: "A coordinated packaging language for brands with several product dimensions.",
      badge: "Scalable",
      useCases: ["Collections", "Multi-SKU brands", "Product families"],
    },
    {
      title: "Black Product Box",
      description: "A clean, bold product box in matte or gloss black for premium brand positioning.",
      badge: "Bold",
      useCases: ["Premium brands", "Tech", "Fashion"],
    },
    {
      title: "White Product Box",
      description: "A minimal white box direction that pairs cleanly with editorial and wellness brand aesthetics.",
      badge: "Minimal",
      useCases: ["Wellness", "Beauty", "Editorial brands"],
    },
    {
      title: "Luxury Presentation Box",
      description: "A highly refined product box with premium materials and finish combinations for top-tier positioning.",
      badge: "Luxury tier",
      useCases: ["Luxury brands", "Flagship products", "Premium retail"],
    },
    {
      title: "Seasonal Product Box",
      description: "A campaign-ready product box for limited-edition seasonal launches and holiday collections.",
      badge: "Seasonal",
      useCases: ["Holiday launches", "Seasonal collections", "Campaign drops"],
    },
    {
      title: "Subscription Product Box",
      description: "A repeat-delivery product box format built for consistent brand presentation across monthly drops.",
      badge: "Subscription",
      useCases: ["Monthly boxes", "Subscription brands", "DTC programs"],
    },
    {
      title: "Eco Product Box",
      description: "A sustainable product box using recycled content and water-based coatings for eco-brand positioning.",
      badge: "Eco-conscious",
      useCases: ["Sustainable brands", "Eco products", "Green retail"],
    },
    {
      title: "Kids Product Box",
      description: "A bright, fun product box format for children's products, toys, and family brands.",
      badge: "Kids",
      useCases: ["Kids products", "Toys", "Family brands"],
    },
    {
      title: "Health Product Box",
      description: "A clean, clinical product box for health, wellness, and supplement brand positioning.",
      badge: "Health",
      useCases: ["Supplements", "Health products", "Wellness"],
    },
    {
      title: "Travel Product Box",
      description: "A compact product box format for travel-size products, miniatures, and discovery kits.",
      badge: "Travel size",
      useCases: ["Travel kits", "Miniatures", "Discovery sets"],
    },
  ],
  "candle-boxes": [
    {
      title: "Single Candle Box",
      description: "A focused format for retail presentation, gifting, and fragrance-led launches.",
      badge: "Retail-ready",
      useCases: ["Single jars", "Boutique shelves", "Gift candles"],
    },
    {
      title: "Gift Set Candle Box",
      description: "Supports multiple candles or candle-plus-accessory bundles with cleaner presentation.",
      badge: "Gift set",
      useCases: ["Holiday sets", "Bundles", "Gifting"],
    },
    {
      title: "Seasonal Candle Packaging",
      description: "Developed for capsule launches, seasonal gifting, and limited-edition fragrance drops.",
      badge: "Seasonal",
      useCases: ["Holiday launches", "Limited editions", "Collections"],
    },
    {
      title: "Mailer-Ready Candle Box",
      description: "Built with stronger protection considerations for direct-to-consumer candle delivery.",
      badge: "Shipping support",
      useCases: ["DTC candles", "Online delivery", "Transit safety"],
    },
    {
      title: "Rigid Candle Presentation Box",
      description: "A more elevated direction for premium home fragrance collections and gifting sets.",
      badge: "Premium gifting",
      useCases: ["Collector candles", "Home fragrance", "Premium sets"],
    },
    {
      title: "Insert-Led Candle Box",
      description: "Uses custom inserts to reduce movement and support a more precise reveal.",
      badge: "Insert compatible",
      useCases: ["Glass jars", "Fragile vessels", "Secure fit"],
    },
    {
      title: "Two-Piece Candle Box",
      description: "A lid-and-base format for boutique candle brands that want more structure and shelf presence.",
      badge: "Boutique",
      useCases: ["Boutique candles", "Retail shelf", "Gifting"],
    },
    {
      title: "Pillar Candle Box",
      description: "A tall-profile box designed to fit and present pillar candles cleanly for retail and gifting.",
      badge: "Pillar format",
      useCases: ["Pillar candles", "Home décor", "Gifting"],
    },
    {
      title: "Kraft Candle Box",
      description: "A natural kraft exterior direction for eco-conscious and artisan candle brands.",
      badge: "Eco-artisan",
      useCases: ["Natural candles", "Eco brands", "Artisan candles"],
    },
    {
      title: "Luxury Candle Box",
      description: "A high-end rigid or specialist board format for top-tier home fragrance and candle brands.",
      badge: "Luxury",
      useCases: ["Luxury candles", "Premium gifting", "High-end retail"],
    },
    {
      title: "Tin Candle Box",
      description: "A box format designed specifically to fit and present candle tins with a clean retail look.",
      badge: "Tin format",
      useCases: ["Tin candles", "Travel candles", "Compact retail"],
    },
    {
      title: "Candle Tube Box",
      description: "A cylindrical candle packaging format for distinctive shelf presence and gifting appeal.",
      badge: "Cylindrical",
      useCases: ["Specialty candles", "Column candles", "Gifting"],
    },
    {
      title: "Wax Melt Candle Box",
      description: "A carton format for wax melt products presented alongside candle collections.",
      badge: "Wax melts",
      useCases: ["Wax melts", "Candle accessories", "Home fragrance"],
    },
    {
      title: "Christmas Candle Box",
      description: "A festive seasonal packaging format for Christmas candle collections and holiday gifting.",
      badge: "Christmas",
      useCases: ["Christmas gifting", "Seasonal drops", "Holiday collections"],
    },
    {
      title: "Wedding Candle Box",
      description: "An elegant candle box format for wedding favors, bridal gifting, and celebration sets.",
      badge: "Wedding",
      useCases: ["Wedding favors", "Bridal gifting", "Celebration"],
    },
  ],
  "cosmetic-boxes": [
    {
      title: "Serum Carton",
      description: "Clean shelf-ready cosmetic packaging for smaller beauty products with precision fit.",
      badge: "Shelf ready",
      useCases: ["Serums", "Skincare", "Beauty retail"],
    },
    {
      title: "Skincare Set Box",
      description: "Presentation-focused format for coordinated skincare kits and multi-item lines.",
      badge: "Launch kits",
      useCases: ["Skincare sets", "PR kits", "Beauty gifting"],
    },
    {
      title: "Perfume-Style Presentation Box",
      description: "A premium direction for beauty launches that need ceremony and stronger bottle support.",
      badge: "Premium finish friendly",
      useCases: ["Fragrance", "Beauty gifting", "Collector editions"],
    },
    {
      title: "Insert-Led Cosmetic Box",
      description: "A cosmetic packaging structure built around inserts for precise product fit and cleaner presentation.",
      badge: "Insert compatible",
      useCases: ["Skincare sets", "Beauty kits", "Multi-item gifting"],
    },
    {
      title: "Lipstick and Makeup Carton",
      description: "A compact cosmetic carton for lipstick, lip liner, mascara, and individual makeup products.",
      badge: "Compact beauty",
      useCases: ["Lipstick", "Mascara", "Compact makeup"],
    },
    {
      title: "Lip Gloss Box",
      description: "A small, elegant carton for lip gloss tubes with premium print and finish options.",
      badge: "Lip care",
      useCases: ["Lip gloss", "Lip care", "Beauty retail"],
    },
    {
      title: "Foundation Box",
      description: "A cosmetic carton for liquid foundation, tinted moisturizer, and coverage products.",
      badge: "Makeup",
      useCases: ["Foundation", "BB cream", "Coverage products"],
    },
    {
      title: "Eyeshadow Palette Box",
      description: "A flat-profile box designed for eyeshadow palettes with premium print and soft-touch finish.",
      badge: "Makeup palette",
      useCases: ["Eyeshadow", "Makeup palettes", "Beauty sets"],
    },
    {
      title: "Face Mask Box",
      description: "A precision carton for sheet masks, clay masks, and peel-off beauty treatments.",
      badge: "Skincare",
      useCases: ["Face masks", "Treatment packs", "Beauty subscription"],
    },
    {
      title: "Eye Cream Box",
      description: "A compact luxury carton for eye creams, serums, and targeted skincare products.",
      badge: "Premium skincare",
      useCases: ["Eye care", "Anti-aging", "Premium skincare"],
    },
    {
      title: "Body Lotion Box",
      description: "A tall carton format for body lotions, creams, and skincare body care products.",
      badge: "Body care",
      useCases: ["Body lotion", "Body cream", "Body care retail"],
    },
    {
      title: "Sunscreen Box",
      description: "A product carton for sunscreen, SPF, and UV-protection skincare products.",
      badge: "SPF",
      useCases: ["Sunscreen", "SPF products", "Outdoor skincare"],
    },
    {
      title: "Hair Care Box",
      description: "A packaging carton for shampoo bars, hair masks, and specialist hair care products.",
      badge: "Hair care",
      useCases: ["Hair products", "Shampoo bars", "Hair treatment"],
    },
    {
      title: "Men's Grooming Box",
      description: "A clean, structured cosmetic box for men's skincare, grooming kits, and gift sets.",
      badge: "Men's grooming",
      useCases: ["Men's skincare", "Grooming kits", "Gifting"],
    },
    {
      title: "Beauty Gift Set Box",
      description: "A presentation gift box for coordinated beauty collections, influencer kits, and seasonal launches.",
      badge: "Gift set",
      useCases: ["Beauty gifting", "Influencer kits", "Seasonal beauty"],
    },
    {
      title: "Minimalist Skincare Box",
      description: "A clean, restrained cosmetic box direction for brands with a minimal visual identity.",
      badge: "Minimal",
      useCases: ["Clean beauty", "Minimal brands", "Premium skincare"],
    },
    {
      title: "Luxury Cosmetic Box",
      description: "A top-tier cosmetic packaging format with premium materials and elevated finish options.",
      badge: "Luxury tier",
      useCases: ["Luxury beauty", "High-end skincare", "Premium cosmetics"],
    },
  ],
  "perfume-boxes": [
    {
      title: "Launch Kit Fragrance Box",
      description: "A structured kit format for fragrance launches that need strong first-impression packaging.",
      badge: "Launch",
      useCases: ["Fragrance launches", "PR kits", "Brand introductions"],
    },
    {
      title: "Single Bottle Rigid Box",
      description: "A precise rigid format for single fragrance bottles with strong insert support.",
      badge: "Bottle support",
      useCases: ["Eau de parfum", "Cologne", "Single fragrances"],
    },
    {
      title: "Magnetic Closure Fragrance Box",
      description: "A premium magnetic presentation for fragrance gifting with a strong keepsake quality.",
      badge: "Gift-ready",
      useCases: ["Fragrance gifting", "Premium launch", "Collector editions"],
    },
    {
      title: "Retail Display Fragrance Box",
      description: "A shelf-ready structure that presents fragrances cleanly and consistently across retail environments.",
      badge: "Retail",
      useCases: ["Retail shelves", "Boutique", "Department stores"],
    },
    {
      title: "Perfume Gift Set",
      description: "A multi-piece fragrance packaging format for gift sets, discovery kits, and travel collections.",
      badge: "Gift set",
      useCases: ["Fragrance sets", "Discovery kits", "Holiday gifts"],
    },
    {
      title: "Eau de Parfum Box",
      description: "A refined carton or rigid format tailored to standard Eau de Parfum bottle presentations.",
      badge: "Fragrance",
      useCases: ["EDP launches", "Retail fragrance", "Premium beauty"],
    },
    {
      title: "Attar and Oud Box",
      description: "A richly finished rigid box for Middle Eastern fragrance formats including attar and oud.",
      badge: "Luxury",
      useCases: ["Attar", "Oud fragrance", "Luxury gifting"],
    },
    {
      title: "Roll-On Perfume Box",
      description: "A compact carton designed for roll-on fragrance formats and travel perfume products.",
      badge: "Travel size",
      useCases: ["Roll-on", "Travel fragrance", "Compact gifting"],
    },
    {
      title: "Niche Fragrance Box",
      description: "A premium rigid box for artisan and niche fragrance brands that emphasize materials and craft.",
      badge: "Niche",
      useCases: ["Niche perfume", "Artisan fragrance", "Collector launches"],
    },
    {
      title: "Limited Edition Perfume Box",
      description: "A campaign-specific fragrance box for limited editions, anniversaries, and exclusive drops.",
      badge: "Limited edition",
      useCases: ["Limited editions", "Annual drops", "Collector formats"],
    },
    {
      title: "Travel Fragrance Box",
      description: "A compact format for travel-size fragrance products and discovery discovery sets.",
      badge: "Travel",
      useCases: ["Travel size", "Discovery sets", "Airport retail"],
    },
    {
      title: "Luxury Perfume Box",
      description: "A top-tier rigid perfume box with specialty finishes for prestige fragrance brands.",
      badge: "Prestige",
      useCases: ["Prestige brands", "Luxury gifting", "High-end retail"],
    },
  ],
  "jewelry-boxes": [
    {
      title: "Ring Box",
      description: "A compact, precise jewelry box built for ring presentation with a secure, padded fit.",
      badge: "Ring presentation",
      useCases: ["Engagement rings", "Wedding bands", "Fine jewelry"],
    },
    {
      title: "Necklace Box",
      description: "A flat rigid format for necklace and chain presentation with insert support.",
      badge: "Necklace",
      useCases: ["Necklaces", "Chains", "Pendants"],
    },
    {
      title: "Bracelet Box",
      description: "A bracelet and bangle box format suited to boutique jewelry and fine accessory brands.",
      badge: "Bracelet",
      useCases: ["Bracelets", "Bangles", "Cuffs"],
    },
    {
      title: "Drawer Jewelry Box",
      description: "A sliding drawer reveal format that creates a more ceremonial jewelry unboxing experience.",
      badge: "Ceremonial",
      useCases: ["Fine jewelry", "Engagement gifts", "Keepsake presentation"],
    },
    {
      title: "Insert-Led Jewelry Box",
      description: "A precision jewelry box built around insert support for secure, elegant product positioning.",
      badge: "Insert compatible",
      useCases: ["Mixed jewelry sets", "Multi-piece sets", "Gifting"],
    },
    {
      title: "Jewelry Set Presentation Box",
      description: "A larger rigid format for presenting matching jewelry sets with coordinated insert layouts.",
      badge: "Set presentation",
      useCases: ["Bridal sets", "Gift sets", "Premium collections"],
    },
    {
      title: "Earring Box",
      description: "A small, clean rigid box for stud and drop earrings with secure insert positioning.",
      badge: "Earrings",
      useCases: ["Stud earrings", "Drop earrings", "Fine jewelry"],
    },
    {
      title: "Watch Box",
      description: "A premium rigid box for single watches with padded cushion insert and keepsake structure.",
      badge: "Watches",
      useCases: ["Watches", "Timepieces", "Luxury accessories"],
    },
    {
      title: "Pendant Box",
      description: "A compact jewelry box for single pendant and charm presentation.",
      badge: "Pendant",
      useCases: ["Pendants", "Charms", "Fine jewelry"],
    },
    {
      title: "Charm Box",
      description: "A small, elegant packaging format for charm collections and bracelet charm gifting.",
      badge: "Charms",
      useCases: ["Charms", "Bracelet charms", "Gifting"],
    },
    {
      title: "Luxury Jewelry Set Box",
      description: "A top-tier rigid box with premium wraps and inserts for high-end jewelry collections.",
      badge: "Luxury",
      useCases: ["Luxury jewelry", "Fine collections", "Premium gifting"],
    },
    {
      title: "Pearl Jewelry Box",
      description: "A classic, elegant rigid box for pearl necklaces, earrings, and sets.",
      badge: "Pearl",
      useCases: ["Pearl jewelry", "Classic gifting", "Bridal"],
    },
  ],
  "custom-tissue-paper": [
    {
      title: "Logo Repeat Tissue",
      description: "A full-surface print tissue format for consistent brand presence inside every order.",
      badge: "Brand-led",
      useCases: ["DTC orders", "Boutique wrap", "Subscription boxes"],
    },
    {
      title: "Luxury Wrap Sheet",
      description: "A single-use premium wrap layer suited to gifting, boutique retail, and elevated shipping.",
      badge: "Premium wrap",
      useCases: ["Gift wrapping", "Boutique orders", "Premium retail"],
    },
    {
      title: "Seasonal Printed Tissue",
      description: "Campaign tissue for seasonal drops, holiday gifting, and limited-edition packaging programs.",
      badge: "Seasonal",
      useCases: ["Holiday campaigns", "Seasonal gifting", "Limited editions"],
    },
    {
      title: "Seasonal Collection Wrap",
      description: "An efficient campaign layer for capsule launches and limited-edition storytelling.",
      badge: "Seasonal",
      useCases: ["Campaign wraps", "Holiday edits", "Special releases"],
    },
    {
      title: "Black Tissue Paper",
      description: "A bold, elegant black tissue direction for premium and fashion-forward brand wrapping.",
      badge: "Bold",
      useCases: ["Fashion brands", "Premium gifting", "Luxury DTC"],
    },
    {
      title: "Kraft Tissue Paper",
      description: "A natural kraft tissue option for eco and artisan brands that want an earthy wrap feel.",
      badge: "Eco-artisan",
      useCases: ["Organic brands", "Artisan products", "Eco gifting"],
    },
    {
      title: "White Tissue Paper",
      description: "A clean white tissue wrap for minimal and beauty brand packaging systems.",
      badge: "Clean",
      useCases: ["Beauty orders", "Minimal brands", "White aesthetics"],
    },
    {
      title: "Colored Tissue Paper",
      description: "Custom-colored tissue paper to match brand palettes and create a more cohesive unboxing.",
      badge: "Color-matched",
      useCases: ["Brand colors", "Gift wrapping", "Fashion retail"],
    },
    {
      title: "Gift Wrapping Tissue",
      description: "Premium tissue paper for gift wrapping, boutique packaging, and elevated product presentation.",
      badge: "Gift wrapping",
      useCases: ["Gifting", "Boutique retail", "Luxury wrapping"],
    },
  ],
  "paper-bags": [
    {
      title: "Boutique Shopping Bag",
      description: "A premium paper bag format for boutique retail brands that want a stronger branded carry experience.",
      badge: "Boutique",
      useCases: ["Retail", "Fashion", "Boutique stores"],
    },
    {
      title: "Luxury Carry Bag",
      description: "A heavyweight paper bag with rope handles for luxury retail, gifting, and premium brand carry.",
      badge: "Luxury",
      useCases: ["Luxury retail", "Gift carrying", "Premium brands"],
    },
    {
      title: "Event and Launch Bag",
      description: "A branded paper bag format for events, launches, and experiential marketing activations.",
      badge: "Events",
      useCases: ["Events", "Launches", "Pop-up retail"],
    },
    {
      title: "Gift Bag",
      description: "A clean, premium paper gift bag for retail gifting, seasonal campaigns, and boutique gifting.",
      badge: "Gift-ready",
      useCases: ["Gifting", "Retail", "Seasonal campaigns"],
    },
    {
      title: "Kraft Paper Bag",
      description: "A natural kraft carry bag for artisan, organic, and eco-conscious retail brands.",
      badge: "Eco",
      useCases: ["Organic brands", "Artisan retail", "Eco products"],
    },
    {
      title: "Black Paper Bag",
      description: "A bold matte black paper bag for premium and fashion brand retail presence.",
      badge: "Bold",
      useCases: ["Fashion retail", "Premium brands", "Luxury gifting"],
    },
    {
      title: "Small Paper Bag",
      description: "A compact carry bag for jewelry, accessories, and small boutique products.",
      badge: "Compact",
      useCases: ["Jewelry", "Accessories", "Small boutique"],
    },
    {
      title: "Large Paper Bag",
      description: "An oversized premium carry bag for clothing, home goods, and multi-product retail.",
      badge: "Large format",
      useCases: ["Clothing", "Home goods", "Large retail"],
    },
  ],
  "sleeves": [
    {
      title: "Box Sleeve",
      description: "A printed sleeve that adds campaign visuals and seasonal messaging without redesigning the base box.",
      badge: "Campaign layer",
      useCases: ["Seasonal edits", "Campaign overlays", "Product relaunches"],
    },
    {
      title: "Retail Carton Sleeve",
      description: "A clean sleeve that wraps a standard carton for cleaner retail shelf presentation.",
      badge: "Retail",
      useCases: ["Retail packaging", "Carton wraps", "Shelf display"],
    },
    {
      title: "Jar Set Sleeve",
      description: "A sleeve format for paired product sets, multi-jar configurations, and gift bundles.",
      badge: "Set presentation",
      useCases: ["Multi-jar sets", "Gift bundles", "Product pairs"],
    },
    {
      title: "Coffee Cup Sleeve",
      description: "A branded coffee sleeve for cafes, events, and specialty beverage brands.",
      badge: "Beverage",
      useCases: ["Cafes", "Events", "Coffee brands"],
    },
    {
      title: "Candle Sleeve",
      description: "A printed sleeve that wraps candle jars or tins for a clean seasonal or launch layer.",
      badge: "Home fragrance",
      useCases: ["Candle branding", "Seasonal candles", "Jar wraps"],
    },
    {
      title: "Gift Sleeve",
      description: "A premium printed sleeve for gift boxes, adding a final layer of campaign storytelling.",
      badge: "Gifting",
      useCases: ["Gift boxes", "Seasonal gifting", "Premium wrapping"],
    },
    {
      title: "Kraft Sleeve",
      description: "A natural kraft sleeve for eco and artisan products with a low-ink, minimal print direction.",
      badge: "Eco",
      useCases: ["Organic products", "Minimal brands", "Eco packaging"],
    },
    {
      title: "Subscription Sleeve",
      description: "A monthly-changing sleeve system for subscription box brands that want flexible messaging.",
      badge: "Subscription",
      useCases: ["Subscription boxes", "Monthly drops", "DTC programs"],
    },
    {
      title: "Seasonal Sleeve",
      description: "A limited-edition printed sleeve for holiday and seasonal product launches.",
      badge: "Seasonal",
      useCases: ["Holiday launches", "Seasonal collections", "Campaign drops"],
    },
    {
      title: "Soap Sleeve",
      description: "A wrap sleeve format for artisan and boutique soap bars with label integration.",
      badge: "Soap",
      useCases: ["Soap packaging", "Artisan soap", "Boutique retail"],
    },
  ],
  "labels-and-stickers": [
    {
      title: "Brand Seal",
      description: "A premium closure detail for tissue wraps, sleeves, and box presentations.",
      badge: "Seal",
      useCases: ["Tissue closures", "Sleeves", "Gift wrapping"],
    },
    {
      title: "Product Label",
      description: "A refined label format for product details, compliance, and branded presentation.",
      badge: "Product detail",
      useCases: ["Beauty labels", "Food labels", "Boutique products"],
    },
    {
      title: "Closure Sticker",
      description: "Adds a cleaner branded finish to mailers, wraps, and short-run packaging programs.",
      badge: "Flexible",
      useCases: ["Mailers", "Short runs", "Packaging seals"],
    },
    {
      title: "Seasonal Campaign Sticker",
      description: "Useful for capsule launches and changing campaign visuals without redesigning the full pack.",
      badge: "Seasonal",
      useCases: ["Launches", "Campaigns", "Limited drops"],
    },
    {
      title: "Bottle Label",
      description: "A precision die-cut label for bottles including beauty, beverage, and specialty food products.",
      badge: "Bottle",
      useCases: ["Bottles", "Serums", "Beverages"],
    },
    {
      title: "Jar Label",
      description: "A wrap-around label for jars, candles, creams, and specialty food products.",
      badge: "Jar",
      useCases: ["Jars", "Candle labels", "Food jars"],
    },
    {
      title: "Thank You Sticker",
      description: "A branded thank-you closure sticker for orders, gifting, and boutique retail.",
      badge: "Brand touch",
      useCases: ["Order packaging", "Gifting", "Boutique brands"],
    },
    {
      title: "QR Code Label",
      description: "A precision label with QR code integration for product authentication and engagement.",
      badge: "Digital",
      useCases: ["Product authentication", "Loyalty", "Digital engagement"],
    },
    {
      title: "Candle Label",
      description: "A heat-resistant label designed for candle jars, tins, and vessels.",
      badge: "Candle",
      useCases: ["Candle jars", "Home fragrance", "Candle retail"],
    },
    {
      title: "Die-Cut Logo Sticker",
      description: "A custom die-cut sticker in the shape of your brand logo for packaging and marketing use.",
      badge: "Brand asset",
      useCases: ["Branding", "Packaging seals", "Promotional"],
    },
  ],
  "inserts": [
    {
      title: "Bottle Insert",
      description: "A precise insert structure for bottles that need stronger fit and presentation.",
      badge: "Protection",
      useCases: ["Beauty bottles", "Fragrance", "Gift sets"],
    },
    {
      title: "Jar Insert",
      description: "Supports jars and vessels with cleaner internal organization and reduced movement.",
      badge: "Secure fit",
      useCases: ["Candles", "Skincare jars", "Gourmet sets"],
    },
    {
      title: "Multi-Product Tray",
      description: "Organizes several items in one refined presentation layout with better spacing.",
      badge: "Multi-item",
      useCases: ["Launch kits", "Gift sets", "PR kits"],
    },
    {
      title: "Gift Set Organizer",
      description: "Adds order, protection, and a more premium reveal inside premium gifting formats.",
      badge: "Gift-ready",
      useCases: ["Gift sets", "Collector kits", "Premium presentations"],
    },
    {
      title: "Foam Insert",
      description: "A precision-cut foam insert for fragile, valuable, or heavy products requiring strong protection.",
      badge: "Fragile products",
      useCases: ["Fragile goods", "Electronics", "Glassware"],
    },
    {
      title: "Paper Pulp Insert",
      description: "An eco-friendly molded paper pulp insert for sustainable packaging programs.",
      badge: "Eco",
      useCases: ["Sustainable brands", "Eco packaging", "Green inserts"],
    },
    {
      title: "Jewelry Insert",
      description: "A precision insert for rings, necklaces, earrings, and jewelry presentation.",
      badge: "Jewelry",
      useCases: ["Fine jewelry", "Accessories", "Gifting"],
    },
    {
      title: "Watch Cushion Insert",
      description: "A padded cushion insert for timepiece and watch box presentation.",
      badge: "Watches",
      useCases: ["Watches", "Luxury accessories", "Gift boxes"],
    },
    {
      title: "Candle Insert",
      description: "A structured insert for candle jar protection inside mailer and retail packaging.",
      badge: "Candle",
      useCases: ["Candle jars", "Home fragrance", "DTC candles"],
    },
    {
      title: "Electronics Insert",
      description: "A protective insert for tech accessories, cables, and electronics in retail packaging.",
      badge: "Electronics",
      useCases: ["Tech accessories", "Electronics", "Product kits"],
    },
  ],
  "sustainable-packaging": [
    {
      title: "Recyclable Mailer",
      description: "A lower-impact shipping format that keeps structure practical and presentation clean.",
      badge: "Eco-conscious",
      useCases: ["E-commerce", "Sustainable brands", "DTC"],
    },
    {
      title: "Paper-Based Insert",
      description: "A more responsible insert route where paper-based support suits the product.",
      badge: "Paper-based",
      useCases: ["Beauty", "Candles", "Gift sets"],
    },
    {
      title: "Low-Ink Luxury Carton",
      description: "A restrained premium carton direction that relies on structure and material feel more than excess print.",
      badge: "Minimal",
      useCases: ["Beauty", "Food", "Retail"],
    },
    {
      title: "Reusable Rigid Box Concept",
      description: "A premium format developed for longer-life use and more considered material decisions.",
      badge: "Reusable",
      useCases: ["Luxury gifting", "Collector boxes", "Keepsake packaging"],
    },
    {
      title: "FSC Certified Board Box",
      description: "A packaging format using FSC-certified board for brands with responsible sourcing commitments.",
      badge: "FSC certified",
      useCases: ["Sustainable brands", "Eco-retail", "Responsible sourcing"],
    },
    {
      title: "Soy Ink Printed Carton",
      description: "A folding carton direction using soy-based inks for lower environmental impact printing.",
      badge: "Low impact print",
      useCases: ["Food packaging", "Beauty", "Wellness"],
    },
    {
      title: "Compostable Mailer",
      description: "A compostable DTC mailer for brands pursuing zero-waste packaging commitments.",
      badge: "Compostable",
      useCases: ["Eco brands", "Zero-waste", "Sustainable DTC"],
    },
    {
      title: "Uncoated Kraft System",
      description: "A minimal packaging system using uncoated kraft for brands avoiding plastic coatings.",
      badge: "Uncoated",
      useCases: ["Organic brands", "Artisan", "Zero-plastic brands"],
    },
  ],
  "gift-boxes": [
    {
      title: "Magnetic Gift Box",
      description: "A premium gifting format with a satisfying magnetic close — ideal for luxury reveals.",
      badge: "Luxury reveal",
      useCases: ["Luxury gifting", "Premium products", "Celebrations"],
    },
    {
      title: "Ribbon Closure Box",
      description: "A classic gift box with ribbon tie closure for an elegant, ceremonial unboxing.",
      badge: "Ceremonial",
      useCases: ["Wedding gifts", "Bridal", "Boutique retail"],
    },
    {
      title: "Lift-Off Lid Gift Box",
      description: "A two-piece gift box with a clean lift-off lid reveal for premium product presentation.",
      badge: "Classic gifting",
      useCases: ["Product gifting", "Retail", "Holiday sets"],
    },
    {
      title: "Keepsake Box",
      description: "A durable, premium box designed to be kept and reused — adding long-term brand touchpoints.",
      badge: "Keepsake",
      useCases: ["Keepsake gifting", "Jewelry", "Collector products"],
    },
    {
      title: "Birthday Gift Box",
      description: "A celebratory premium gift box format for birthday gifting and special occasion delivery.",
      badge: "Birthday",
      useCases: ["Birthday gifting", "Celebration", "Delivery gifts"],
    },
    {
      title: "Wedding Gift Box",
      description: "An elegant rigid gift box format for wedding favors, bridal gifts, and wedding party sets.",
      badge: "Wedding",
      useCases: ["Wedding favors", "Bridal gifting", "Bridesmaid gifts"],
    },
    {
      title: "Holiday Gift Box",
      description: "A seasonal premium gift box for Christmas, holiday gifting, and festive product collections.",
      badge: "Holiday",
      useCases: ["Christmas", "Holiday gifting", "Seasonal products"],
    },
    {
      title: "Corporate Gift Box",
      description: "A professional branded gift box for corporate gifting programs, client appreciation, and events.",
      badge: "Corporate",
      useCases: ["Corporate gifting", "Client gifts", "Events"],
    },
    {
      title: "Premium Gift Set Box",
      description: "A multi-compartment rigid box for curated gift sets, product bundles, and launch kits.",
      badge: "Gift set",
      useCases: ["Product bundles", "Gift sets", "Launch kits"],
    },
    {
      title: "Nested Gift Box",
      description: "A tiered gift box system where one box reveals another for a layered unboxing experience.",
      badge: "Layered reveal",
      useCases: ["Luxury reveals", "Special occasions", "Premium gifting"],
    },
    {
      title: "Window Gift Box",
      description: "A premium gift box with a clear window that reveals the product inside.",
      badge: "Visible product",
      useCases: ["Confectionery gifts", "Visible products", "Retail gifting"],
    },
    {
      title: "Black Gift Box",
      description: "A sleek, all-black premium gift box for modern, fashion-forward gifting presentation.",
      badge: "Bold gifting",
      useCases: ["Modern brands", "Fashion gifting", "Premium sends"],
    },
    {
      title: "Gold Accent Gift Box",
      description: "A premium gift box with gold foil or emboss accents for luxury and celebration gifting.",
      badge: "Gold detail",
      useCases: ["Luxury gifting", "Celebration", "Anniversary gifts"],
    },
    {
      title: "Mini Gift Box",
      description: "A compact premium gift box for jewelry, accessories, and small luxury products.",
      badge: "Compact",
      useCases: ["Jewelry", "Small gifts", "Accessories"],
    },
    {
      title: "Eco Gift Box",
      description: "A sustainable gift box made from recycled content for eco-conscious gifting programs.",
      badge: "Eco gifting",
      useCases: ["Eco brands", "Sustainable gifting", "Green programs"],
    },
    {
      title: "Valentine Gift Box",
      description: "A romantic premium gift box for Valentine's Day gifting and love-themed product collections.",
      badge: "Valentine",
      useCases: ["Valentine's Day", "Romance", "Couple gifting"],
    },
    {
      title: "Mother's Day Box",
      description: "A soft, elegant gift box for Mother's Day gifting and spring celebration products.",
      badge: "Mother's Day",
      useCases: ["Mother's Day", "Spring gifting", "Floral collections"],
    },
  ],
  "window-boxes": [
    {
      title: "Bakery Window Box",
      description: "A food-safe window carton for pastries, cookies, and artisan baked goods display.",
      badge: "Bakery",
      useCases: ["Bakeries", "Pastry shops", "Artisan food"],
    },
    {
      title: "Soap Window Box",
      description: "A kraft or white window carton for boutique soap and bath product retail display.",
      badge: "Soap & bath",
      useCases: ["Artisan soap", "Bath products", "Boutique retail"],
    },
    {
      title: "Kraft Window Box",
      description: "A natural kraft window carton with an earthy look for organic and artisan products.",
      badge: "Eco",
      useCases: ["Organic products", "Artisan brands", "Natural packaging"],
    },
    {
      title: "Gift Window Box",
      description: "A premium gift box with a clear window to display products before unwrapping.",
      badge: "Gift display",
      useCases: ["Gift products", "Confectionery", "Retail gifting"],
    },
    {
      title: "Candy Window Box",
      description: "A confectionery window box for sweets, chocolates, and candy retail presentation.",
      badge: "Confectionery",
      useCases: ["Candy", "Chocolates", "Confectionery retail"],
    },
    {
      title: "Tea Window Box",
      description: "A retail window carton for loose-leaf tea, tea bags, and specialty beverage products.",
      badge: "Beverage",
      useCases: ["Tea retail", "Specialty beverage", "Gift tea"],
    },
    {
      title: "Product Display Window Box",
      description: "A clean window carton suited to cosmetics, supplements, and general retail display.",
      badge: "Retail display",
      useCases: ["Retail", "Cosmetics", "Supplements"],
    },
    {
      title: "Mini Window Box",
      description: "A compact window box for small products, accessories, and sample-size items.",
      badge: "Compact",
      useCases: ["Samples", "Small products", "Jewelry accessories"],
    },
    {
      title: "Rigid Window Box",
      description: "A premium rigid window box for luxury products requiring both visibility and protection.",
      badge: "Luxury",
      useCases: ["Luxury products", "Premium gifts", "High-end retail"],
    },
    {
      title: "Tall Window Carton",
      description: "A tall-profile window carton for bottles, tall jars, and vertical product presentations.",
      badge: "Tall format",
      useCases: ["Bottles", "Tall jars", "Vertical products"],
    },
    {
      title: "Pillow Window Box",
      description: "A pillow-shaped box with a window cutout for a distinctive retail presentation.",
      badge: "Distinctive shape",
      useCases: ["Boutique retail", "Gifting", "Small products"],
    },
    {
      title: "Custom Die-Cut Window Box",
      description: "A window box with a custom-shaped window cutout matching the product or brand motif.",
      badge: "Custom shape",
      useCases: ["Brand-specific", "Custom shapes", "Product-shaped window"],
    },
  ],
  "kraft-boxes": [
    {
      title: "Natural Kraft Box",
      description: "A clean, earthy kraft box for organic and artisan brands with minimal print direction.",
      badge: "Natural",
      useCases: ["Organic products", "Artisan brands", "Minimal packaging"],
    },
    {
      title: "Brown Kraft Mailer",
      description: "A natural kraft mailer for sustainable DTC brands that prefer an earthy shipping aesthetic.",
      badge: "Eco mailer",
      useCases: ["Eco DTC", "Sustainable shipping", "Natural brands"],
    },
    {
      title: "Kraft Gift Box",
      description: "A natural kraft rigid or folding gift box for eco-conscious gifting and boutique brands.",
      badge: "Eco gifting",
      useCases: ["Eco gifting", "Artisan gifting", "Natural presents"],
    },
    {
      title: "Kraft Food Box",
      description: "A food-grade kraft carton for bakery, specialty food, and artisan culinary products.",
      badge: "Food",
      useCases: ["Artisan food", "Bakery", "Specialty food"],
    },
    {
      title: "Kraft Tea Box",
      description: "A kraft tea carton or pouch box for specialty tea brands with a natural aesthetic.",
      badge: "Beverage",
      useCases: ["Specialty tea", "Herbal blends", "Natural beverage"],
    },
    {
      title: "Kraft Coffee Box",
      description: "A kraft coffee box or carton for specialty roasters with a natural, minimal look.",
      badge: "Coffee",
      useCases: ["Specialty coffee", "Artisan roasters", "Coffee retail"],
    },
    {
      title: "Eco Kraft Shipping Box",
      description: "A recycled kraft shipping box for eco-conscious brands minimizing packaging footprint.",
      badge: "Sustainable shipping",
      useCases: ["Eco shipping", "Sustainable brands", "Online orders"],
    },
    {
      title: "Kraft Retail Box",
      description: "A kraft retail display box for boutique and natural product retail environments.",
      badge: "Boutique retail",
      useCases: ["Farmers markets", "Boutique retail", "Natural products"],
    },
    {
      title: "Kraft Soap Box",
      description: "A kraft soap packaging box for handmade, natural, and organic soap brands.",
      badge: "Artisan soap",
      useCases: ["Handmade soap", "Organic soap", "Boutique bath"],
    },
    {
      title: "Kraft Candle Box",
      description: "A natural kraft candle box for eco candle brands and home fragrance with earthy aesthetic.",
      badge: "Eco candle",
      useCases: ["Natural candles", "Eco home fragrance", "Artisan candles"],
    },
    {
      title: "Kraft Cosmetic Box",
      description: "A kraft cosmetic box for clean beauty and natural skincare brands.",
      badge: "Clean beauty",
      useCases: ["Natural beauty", "Organic cosmetics", "Clean skincare"],
    },
    {
      title: "Kraft Pillow Box",
      description: "A curved kraft pillow box for accessories, jewelry, and boutique product gifting.",
      badge: "Distinctive",
      useCases: ["Accessories", "Jewelry", "Boutique gifting"],
    },
  ],
  "display-boxes": [
    {
      title: "Counter Display Box",
      description: "A compact retail counter display for high-frequency impulse purchase products.",
      badge: "Impulse retail",
      useCases: ["Cosmetics", "Supplements", "Confectionery"],
    },
    {
      title: "PDQ Display Box",
      description: "A shipper-display format that converts directly to a point-of-sale counter display.",
      badge: "Ship to display",
      useCases: ["Retail shipment", "PDQ", "Fast retail setup"],
    },
    {
      title: "Cosmetic Display Box",
      description: "A beauty-specific counter display for lipstick, mascara, and retail cosmetic products.",
      badge: "Beauty retail",
      useCases: ["Beauty retail", "Cosmetics", "Makeup counters"],
    },
    {
      title: "Supplement Display Box",
      description: "A retail counter display for supplements, vitamins, and health products in pharmacy and wellness stores.",
      badge: "Health retail",
      useCases: ["Supplements", "Vitamins", "Pharmacy display"],
    },
    {
      title: "CBD Display Box",
      description: "A counter display structure for CBD tinctures, gummies, and cannabis retail products.",
      badge: "CBD retail",
      useCases: ["CBD retail", "Cannabis dispensary", "Health stores"],
    },
    {
      title: "Food Counter Display",
      description: "A food-safe display box for snacks, confectionery, and specialty food products at retail.",
      badge: "Food retail",
      useCases: ["Snack retail", "Confectionery", "Specialty food"],
    },
    {
      title: "Candle Display Box",
      description: "A retail display structure for candles and home fragrance products at boutique and gift store counters.",
      badge: "Home fragrance",
      useCases: ["Candle retail", "Home fragrance", "Gift stores"],
    },
    {
      title: "Electronics Display Box",
      description: "A structured counter display for tech accessories, cables, and electronics retail.",
      badge: "Tech retail",
      useCases: ["Electronics accessories", "Tech retail", "Cable display"],
    },
    {
      title: "Header Card Display Box",
      description: "A display box with a printed header card for product description and brand messaging.",
      badge: "Header card",
      useCases: ["Retail messaging", "Brand education", "Display packaging"],
    },
    {
      title: "Seasonal Display Box",
      description: "A campaign-specific counter display for holiday and seasonal product promotions.",
      badge: "Seasonal",
      useCases: ["Holiday retail", "Seasonal campaigns", "Promotional display"],
    },
    {
      title: "Spinner Display",
      description: "A rotating display unit for smaller products with multiple facings at retail.",
      badge: "Multi-facing",
      useCases: ["Accessories", "Compact products", "High-traffic retail"],
    },
  ],
  "corrugated-boxes": [
    {
      title: "Standard Corrugated Shipping Box",
      description: "A reliable standard-sized corrugated box for shipping products safely and consistently.",
      badge: "Shipping",
      useCases: ["E-commerce", "Retail distribution", "Online orders"],
    },
    {
      title: "Heavy Duty Shipping Box",
      description: "A double-wall corrugated structure for heavier, more fragile, or high-value products.",
      badge: "Heavy duty",
      useCases: ["Heavy products", "Fragile items", "High-value goods"],
    },
    {
      title: "Custom Print Corrugated Box",
      description: "A branded corrugated shipping box with full exterior print for DTC brand presence.",
      badge: "Branded shipping",
      useCases: ["DTC brands", "Branded shipping", "E-commerce"],
    },
    {
      title: "Corrugated Mailer Box",
      description: "A lightweight corrugated mailer for smaller product shipping with brand print options.",
      badge: "Lightweight mailer",
      useCases: ["Online orders", "Lightweight shipping", "Book mailers"],
    },
    {
      title: "Retail-Ready Corrugated Box",
      description: "A corrugated shipper that converts to a retail-ready shelf display at destination.",
      badge: "Retail-ready",
      useCases: ["Retail distribution", "Grocery", "Mass retail"],
    },
    {
      title: "Corrugated Display Tray",
      description: "A flat corrugated tray for product organization, retail display, and storage.",
      badge: "Tray display",
      useCases: ["Tray packaging", "Retail display", "Warehouse organization"],
    },
    {
      title: "Die-Cut Corrugated Box",
      description: "A custom die-cut corrugated format shaped around the specific product dimensions.",
      badge: "Custom shape",
      useCases: ["Oddly shaped products", "Specialty items", "Custom fit"],
    },
    {
      title: "Interior Print Corrugated",
      description: "A corrugated shipping box with full interior print for a stronger brand unboxing experience.",
      badge: "Interior brand",
      useCases: ["DTC experience", "Subscription boxes", "Premium shipping"],
    },
    {
      title: "Black Corrugated Box",
      description: "A bold black corrugated box for premium DTC and fashion brand shipping.",
      badge: "Premium black",
      useCases: ["Premium DTC", "Fashion brands", "Luxury shipping"],
    },
    {
      title: "Kraft Corrugated Box",
      description: "A natural kraft corrugated shipping box for eco and artisan brand shipping.",
      badge: "Eco shipping",
      useCases: ["Eco brands", "Natural products", "Sustainable shipping"],
    },
    {
      title: "Corrugated Insert Box",
      description: "A corrugated box with molded or die-cut insert support for fragile product protection.",
      badge: "Fragile protection",
      useCases: ["Fragile goods", "Candles", "Glass products"],
    },
  ],
  "soap-boxes": [
    {
      title: "Kraft Soap Box",
      description: "A natural kraft tuck-end box for handmade and artisan soap with a clean eco look.",
      badge: "Eco artisan",
      useCases: ["Handmade soap", "Natural brands", "Artisan retail"],
    },
    {
      title: "Window Soap Box",
      description: "A soap carton with a clear window cutout for product visibility at boutique and retail.",
      badge: "Product visible",
      useCases: ["Boutique retail", "Natural soap", "Visual display"],
    },
    {
      title: "Soap Sleeve",
      description: "A wrap-around sleeve for naked soap bars — a minimal, eco-friendly packaging direction.",
      badge: "Minimal",
      useCases: ["Artisan soap", "Minimal brands", "Eco soap"],
    },
    {
      title: "Luxury Soap Box",
      description: "A premium rigid or specialty board box for spa, hotel, and luxury soap brands.",
      badge: "Luxury spa",
      useCases: ["Luxury soap", "Hotel amenities", "Spa brands"],
    },
    {
      title: "Organic Soap Box",
      description: "A natural, uncoated kraft box for certified organic and botanical soap products.",
      badge: "Organic",
      useCases: ["Certified organic", "Natural soap", "Botanical brands"],
    },
    {
      title: "Soap Gift Box",
      description: "A premium gift box for soap sets, spa collections, and boutique gift sets.",
      badge: "Gift set",
      useCases: ["Soap gifts", "Spa sets", "Boutique gifting"],
    },
    {
      title: "Bath Bomb Box",
      description: "A carton or rigid format for bath bombs with product visibility and gifting appeal.",
      badge: "Bath & body",
      useCases: ["Bath bombs", "Spa retail", "Gifting"],
    },
    {
      title: "Artisan Soap Box",
      description: "A handcrafted-aesthetic soap box for artisan and small-batch soap producers.",
      badge: "Artisan",
      useCases: ["Small-batch soap", "Handcrafted brands", "Artisan retail"],
    },
    {
      title: "Hotel Soap Box",
      description: "A clean, minimal soap box format for hotel amenity and hospitality soap brands.",
      badge: "Hospitality",
      useCases: ["Hotel amenities", "Hospitality brands", "Travel soap"],
    },
    {
      title: "Body Bar Box",
      description: "A carton format for solid body bars, shampoo bars, and zero-waste beauty products.",
      badge: "Zero-waste",
      useCases: ["Shampoo bars", "Body bars", "Zero-waste beauty"],
    },
    {
      title: "Black Soap Box",
      description: "A bold black soap packaging format for activated charcoal, men's soap, and premium brands.",
      badge: "Bold",
      useCases: ["Charcoal soap", "Men's grooming", "Premium soap"],
    },
    {
      title: "Soap Tuck End Carton",
      description: "A standard tuck-end carton format for soap in clean, minimal presentation.",
      badge: "Clean classic",
      useCases: ["Retail soap", "Standard format", "Clean brands"],
    },
  ],
  "mylar-bags": [
    {
      title: "Stand-Up Pouch",
      description: "A versatile stand-up barrier pouch for food, supplements, coffee, and specialty products.",
      badge: "Versatile",
      useCases: ["Coffee", "Supplements", "Specialty food"],
    },
    {
      title: "3.5g Mylar Bag",
      description: "A standard-size cannabis packaging bag for 3.5g flower, pre-rolls, and similar products.",
      badge: "Cannabis",
      useCases: ["Cannabis", "CBD", "3.5g packaging"],
    },
    {
      title: "1 oz Mylar Bag",
      description: "A compact mylar bag for 1 oz products including CBD, herbs, and specialty food.",
      badge: "Compact",
      useCases: ["CBD", "Herbs", "Small batch food"],
    },
    {
      title: "1 lb Mylar Bag",
      description: "A large capacity mylar bag for coffee, protein powder, and bulk supplement packaging.",
      badge: "Large format",
      useCases: ["Coffee", "Protein powder", "Bulk supplements"],
    },
    {
      title: "Resealable Zipper Pouch",
      description: "A mylar pouch with a press-seal zipper for repeated use and freshness retention.",
      badge: "Resealable",
      useCases: ["Coffee", "Snacks", "Supplements"],
    },
    {
      title: "Child-Resistant Pouch",
      description: "A child-resistant mylar pouch for cannabis, CBD, and regulated supplement products.",
      badge: "Child-resistant",
      useCases: ["Cannabis", "CBD", "Regulated products"],
    },
    {
      title: "Clear Front Mylar Bag",
      description: "A mylar bag with a clear front panel for product visibility and brand presentation.",
      badge: "Visible product",
      useCases: ["Specialty food", "Coffee", "Candy"],
    },
    {
      title: "Black Mylar Bag",
      description: "A bold all-black mylar bag for cannabis, premium supplements, and specialty food.",
      badge: "Bold",
      useCases: ["Premium cannabis", "Specialty supplements", "Bold brands"],
    },
    {
      title: "Kraft Mylar Bag",
      description: "A kraft-backed mylar pouch for coffee, tea, and natural product brands.",
      badge: "Natural",
      useCases: ["Coffee", "Tea", "Natural food"],
    },
    {
      title: "Flat Bottom Coffee Bag",
      description: "A premium flat-bottom coffee bag with one-way degassing valve for specialty roasters.",
      badge: "Coffee",
      useCases: ["Specialty coffee", "Artisan roasters", "Café retail"],
    },
    {
      title: "Tea Stand-Up Pouch",
      description: "A premium tea pouch for loose-leaf, herbal blends, and specialty beverage brands.",
      badge: "Tea",
      useCases: ["Tea brands", "Herbal teas", "Specialty beverage"],
    },
    {
      title: "Supplement Pouch",
      description: "A high-barrier supplement pouch for vitamins, protein, and health product brands.",
      badge: "Supplement",
      useCases: ["Supplements", "Vitamins", "Protein powder"],
    },
    {
      title: "Pet Food Pouch",
      description: "A durable stand-up pouch for pet food, pet treats, and specialty pet nutrition brands.",
      badge: "Pet food",
      useCases: ["Pet food", "Dog treats", "Pet nutrition"],
    },
    {
      title: "Candy Mylar Bag",
      description: "A confectionery mylar pouch for candy, gummies, and specialty sweets.",
      badge: "Confectionery",
      useCases: ["Candy", "Gummies", "Sweet brands"],
    },
    {
      title: "Smell-Proof Pouch",
      description: "A high-barrier, smell-proof pouch for cannabis, herbs, and odor-sensitive products.",
      badge: "Smell-proof",
      useCases: ["Cannabis", "CBD", "Herbs"],
    },
    {
      title: "Compostable Pouch",
      description: "A certified compostable stand-up pouch for eco-brands pursuing zero-waste packaging.",
      badge: "Compostable",
      useCases: ["Eco coffee", "Zero-waste brands", "Sustainable food"],
    },
    {
      title: "Custom Print Mylar Bag",
      description: "A full-color custom printed mylar bag for brand-forward cannabis and food products.",
      badge: "Full-color print",
      useCases: ["Premium brands", "Branded cannabis", "Specialty food"],
    },
    {
      title: "Protein Powder Bag",
      description: "A large-format high-barrier pouch for protein powder, pre-workout, and bulk supplements.",
      badge: "Supplement",
      useCases: ["Protein powder", "Gym supplements", "Sports nutrition"],
    },
    {
      title: "Snack Pouch",
      description: "A retail-ready stand-up pouch for snack brands, nut mixes, and on-the-go food products.",
      badge: "Snack",
      useCases: ["Snack brands", "Nut mixes", "Healthy snacks"],
    },
    {
      title: "Seed Pouch",
      description: "A barrier pouch for gardening seeds, specialty grains, and botanical products.",
      badge: "Botanical",
      useCases: ["Seeds", "Grains", "Botanical products"],
    },
  ],
  "wax-melt-boxes": [
    {
      title: "Clamshell Wax Melt Box",
      description: "A standard clamshell format for wax melt snap bars with product visibility.",
      badge: "Classic format",
      useCases: ["Wax melts", "Snap bars", "Retail fragrance"],
    },
    {
      title: "Wax Melt Gift Box",
      description: "A premium gift box for wax melt collections and home fragrance gifting sets.",
      badge: "Gift set",
      useCases: ["Fragrance gifting", "Home gifts", "Holiday sets"],
    },
    {
      title: "Seasonal Wax Melt Box",
      description: "A campaign-specific wax melt packaging format for seasonal and holiday collections.",
      badge: "Seasonal",
      useCases: ["Christmas", "Holiday collections", "Seasonal launches"],
    },
    {
      title: "Kraft Wax Melt Box",
      description: "A natural kraft box for eco and artisan wax melt brands with minimal print direction.",
      badge: "Eco artisan",
      useCases: ["Eco wax melts", "Artisan fragrance", "Natural brands"],
    },
    {
      title: "Wax Melt Window Box",
      description: "A window carton for wax melts that displays the product through a clear acetate panel.",
      badge: "Visible product",
      useCases: ["Wax melt display", "Retail visibility", "Boutique"],
    },
    {
      title: "Snap Bar Box",
      description: "A carton format specifically designed for wax melt snap bar sizing and presentation.",
      badge: "Snap bar",
      useCases: ["Snap bars", "Wax melts", "Home fragrance"],
    },
    {
      title: "Wax Melt Drawer Box",
      description: "A sliding drawer rigid box for luxury wax melt collections and premium gifting.",
      badge: "Luxury",
      useCases: ["Luxury wax melts", "Premium gifts", "Collector sets"],
    },
    {
      title: "Wax Melt Tray Box",
      description: "A tray-and-sleeve format for wax melt collections and fragrance sets.",
      badge: "Collection set",
      useCases: ["Fragrance collections", "Sets", "Retail display"],
    },
    {
      title: "Display Wax Melt Box",
      description: "A retail counter display for multiple wax melt varieties at boutique fragrance shops.",
      badge: "Retail display",
      useCases: ["Retail counters", "Gift shops", "Home fragrance retail"],
    },
    {
      title: "Luxury Wax Melt Box",
      description: "A premium rigid or specialty board box for high-end wax melt and home fragrance brands.",
      badge: "Premium",
      useCases: ["Luxury candle brands", "Premium home", "Gift shops"],
    },
  ],
  "food-boxes": [
    {
      title: "Gourmet Food Gift Box",
      description: "A premium rigid or specialty gift box for artisan food collections and gourmet gifting.",
      badge: "Gourmet gifting",
      useCases: ["Food gifting", "Artisan brands", "Holiday sets"],
    },
    {
      title: "Gable Box",
      description: "A handled carton format popular for bakery, event food, and takeaway presentation.",
      badge: "Handled",
      useCases: ["Events", "Takeaway", "Bakery"],
    },
    {
      title: "Kraft Food Box",
      description: "A natural kraft food carton for artisan, organic, and specialty food retail.",
      badge: "Artisan food",
      useCases: ["Artisan food", "Organic retail", "Specialty food"],
    },
    {
      title: "Window Food Box",
      description: "A food-grade window carton for baked goods, confectionery, and specialty food products.",
      badge: "Visible product",
      useCases: ["Bakery", "Confectionery", "Specialty retail"],
    },
    {
      title: "Holiday Food Box",
      description: "A festive food packaging format for seasonal collections, holiday hampers, and gift food.",
      badge: "Holiday",
      useCases: ["Holiday gifting", "Seasonal food", "Christmas hampers"],
    },
    {
      title: "Black Food Box",
      description: "A bold black food box for premium restaurant, gourmet, and specialty food brands.",
      badge: "Premium food",
      useCases: ["Gourmet", "Premium restaurant", "Specialty food"],
    },
    {
      title: "Sustainable Food Box",
      description: "A recycled or compostable food carton for eco-conscious food brands and restaurants.",
      badge: "Eco food",
      useCases: ["Eco food brands", "Compostable packaging", "Green restaurants"],
    },
    {
      title: "Snack Box",
      description: "A clean compact carton for snack bars, protein bars, and healthy snack products.",
      badge: "Snack",
      useCases: ["Snack brands", "Health bars", "Fitness products"],
    },
    {
      title: "Catering Box",
      description: "A large-format food carton for catering, batch food, and event food packaging.",
      badge: "Catering",
      useCases: ["Catering", "Events", "Batch food"],
    },
    {
      title: "Chinese Takeout Box",
      description: "A classic handled takeout carton for Asian cuisine, street food, and delivery brands.",
      badge: "Takeout",
      useCases: ["Asian food", "Takeaway", "Street food"],
    },
    {
      title: "Macaron Box",
      description: "A precision food carton for macarons with individual insert cavities for each piece.",
      badge: "Patisserie",
      useCases: ["Macarons", "Patisserie", "Fine confectionery"],
    },
    {
      title: "Brownie Box",
      description: "A clean food box for brownie slices, fudge squares, and baked treats.",
      badge: "Baked treats",
      useCases: ["Brownies", "Baked treats", "Artisan baking"],
    },
    {
      title: "Treat Box",
      description: "A premium treat packaging box for gift food, artisan sweets, and specialty confectionery.",
      badge: "Gift treats",
      useCases: ["Treats", "Gift food", "Artisan sweets"],
    },
  ],
  "bakery-boxes": [
    {
      title: "Cake Box",
      description: "A sturdy food-safe cake box for whole cakes and layered desserts in bakery presentation.",
      badge: "Cake",
      useCases: ["Whole cakes", "Layered cakes", "Bakery retail"],
    },
    {
      title: "Cookie Box",
      description: "A premium cookie packaging box for artisan cookies, biscuits, and treat gifting.",
      badge: "Cookies",
      useCases: ["Artisan cookies", "Baked treats", "Gift cookies"],
    },
    {
      title: "Cupcake Box",
      description: "A food-grade carton for cupcakes with insert cavities for secure transit presentation.",
      badge: "Cupcakes",
      useCases: ["Cupcakes", "Mini cakes", "Event baking"],
    },
    {
      title: "Pastry Window Box",
      description: "A window carton for displaying croissants, danishes, and specialty pastries.",
      badge: "Pastry display",
      useCases: ["Pastry shops", "Café retail", "Artisan baking"],
    },
    {
      title: "Bread Packaging",
      description: "A food-grade bag or wrap for artisan bread, sourdough, and specialty loaves.",
      badge: "Artisan bread",
      useCases: ["Artisan bread", "Sourdough", "Bakery loaves"],
    },
    {
      title: "Donut Box",
      description: "A handled carton format for donuts with a clean, branded presentation.",
      badge: "Donuts",
      useCases: ["Donut shops", "Bakery treats", "Event gifting"],
    },
    {
      title: "Muffin Box",
      description: "A compact carton for muffins, mini loaves, and artisan baked individual portions.",
      badge: "Muffins",
      useCases: ["Muffin shops", "Artisan baking", "Grab-and-go"],
    },
    {
      title: "Bagel Box",
      description: "A food-grade carton for bagel packaging in retail, delivery, and gift sets.",
      badge: "Bagels",
      useCases: ["Bagel shops", "Bakery retail", "Food gifting"],
    },
    {
      title: "Brownie and Fudge Box",
      description: "A specialty food carton for handmade brownies, fudge, and artisan confectionery treats.",
      badge: "Artisan treats",
      useCases: ["Artisan brownies", "Fudge", "Gift treats"],
    },
    {
      title: "Bakery Gift Box",
      description: "A premium gift box for curated bakery collections, artisan treats, and holiday food gifts.",
      badge: "Bakery gifting",
      useCases: ["Bakery gifting", "Holiday treats", "Artisan gift sets"],
    },
    {
      title: "Macaroon Display Box",
      description: "A patisserie-style display box for macarons with individual presentation cavities.",
      badge: "Patisserie",
      useCases: ["Macarons", "Patisserie", "Luxury bakery"],
    },
    {
      title: "Kraft Bakery Bag",
      description: "A natural kraft paper bag for bread, pastries, and artisan food in bakery retail.",
      badge: "Kraft",
      useCases: ["Bakery bags", "Bread bags", "Artisan food"],
    },
    {
      title: "Holiday Bakery Box",
      description: "A seasonal decorated box for Christmas cookies, holiday treats, and festive bakery gifting.",
      badge: "Holiday",
      useCases: ["Christmas baking", "Holiday treats", "Seasonal gifts"],
    },
  ],
  "cake-boxes": [
    {
      title: "Standard Cake Box",
      description: "A reliable, food-safe cake box in standard sizes for whole and layered cakes.",
      badge: "Standard",
      useCases: ["Whole cakes", "Bakery retail", "Standard format"],
    },
    {
      title: "Window Cake Box",
      description: "A cake box with a clear window lid for product visibility and presentation.",
      badge: "Window",
      useCases: ["Display cakes", "Retail bakery", "Visible desserts"],
    },
    {
      title: "Tall Tier Cake Box",
      description: "A deep cake box for tall-tier and multi-layer celebration cakes.",
      badge: "Tall format",
      useCases: ["Tall cakes", "Wedding tiers", "Specialty cakes"],
    },
    {
      title: "Custom Printed Cake Box",
      description: "A branded cake box with full-color print for bakery identity and memorable gifting.",
      badge: "Branded",
      useCases: ["Brand identity", "Custom bakery", "Gifting"],
    },
    {
      title: "Square Cake Box",
      description: "A square-format cake box for sheet cakes, specialty squares, and custom-shaped cakes.",
      badge: "Square format",
      useCases: ["Sheet cakes", "Square cakes", "Custom formats"],
    },
    {
      title: "Round Cake Box",
      description: "A circular cake box format for round celebration cakes and tiered presentations.",
      badge: "Round",
      useCases: ["Round cakes", "Birthday cakes", "Celebration"],
    },
    {
      title: "Mini Cake Box",
      description: "A small cake box for individual servings, mini cakes, and petit fours.",
      badge: "Mini",
      useCases: ["Mini cakes", "Individual servings", "Event baking"],
    },
    {
      title: "Kraft Cake Box",
      description: "A natural kraft cake box for organic, artisan, and eco-conscious bakery brands.",
      badge: "Kraft",
      useCases: ["Organic bakery", "Artisan cakes", "Eco baking"],
    },
    {
      title: "Pink Bakery Box",
      description: "A branded pink cake box for patisserie, celebration cake, and boutique bakery brands.",
      badge: "Boutique",
      useCases: ["Patisserie", "Celebration cakes", "Boutique bakery"],
    },
    {
      title: "Black Cake Box",
      description: "An elegant black cake box for premium dessert, chocolate cake, and luxury bakery brands.",
      badge: "Premium",
      useCases: ["Luxury bakery", "Chocolate cakes", "Premium desserts"],
    },
    {
      title: "Wedding Cake Box",
      description: "A premium cake box designed for wedding cake slices, favors, and celebration portions.",
      badge: "Wedding",
      useCases: ["Wedding cakes", "Celebration portions", "Bridal events"],
    },
  ],
  "coffee-tea-boxes": [
    {
      title: "Coffee Stand-Up Pouch",
      description: "A premium stand-up coffee pouch with one-way degassing valve for specialty roasters.",
      badge: "Specialty coffee",
      useCases: ["Specialty coffee", "Artisan roasters", "Coffee retail"],
    },
    {
      title: "Flat-Bottom Coffee Bag",
      description: "A pillow-stand flat-bottom coffee bag for stable shelf presence in specialty retail.",
      badge: "Shelf stable",
      useCases: ["Specialty coffee", "Café retail", "Premium roasters"],
    },
    {
      title: "Tea Stand-Up Pouch",
      description: "A specialty tea pouch for loose-leaf teas, herbal blends, and premium beverage brands.",
      badge: "Tea",
      useCases: ["Loose-leaf tea", "Herbal blends", "Specialty tea"],
    },
    {
      title: "Coffee Gift Box",
      description: "A premium rigid or specialty box for coffee gift sets, curated blends, and seasonal gifting.",
      badge: "Coffee gifting",
      useCases: ["Coffee gifts", "Holiday sets", "Artisan gifting"],
    },
    {
      title: "Tea Gift Box",
      description: "A curated tea gift box for specialty blend collections, seasonal sets, and premium gifting.",
      badge: "Tea gifting",
      useCases: ["Tea gifts", "Specialty collections", "Holiday gifting"],
    },
    {
      title: "Coffee Pod Box",
      description: "A clean retail carton for coffee pods, capsules, and single-serve coffee formats.",
      badge: "Coffee pods",
      useCases: ["Coffee pods", "Capsules", "Café retail"],
    },
    {
      title: "Compostable Coffee Bag",
      description: "A certified compostable coffee bag for eco-conscious specialty roasters.",
      badge: "Compostable",
      useCases: ["Eco coffee", "Zero-waste", "Sustainable roasters"],
    },
    {
      title: "Craft Tea Canister Box",
      description: "A carton or sleeve format for specialty tea tins and canisters with premium label integration.",
      badge: "Tea canister",
      useCases: ["Tin packaging", "Specialty tea", "Gift tea"],
    },
    {
      title: "Single Origin Coffee Bag",
      description: "A premium coffee bag for single-origin specialty coffee with origin story print space.",
      badge: "Single origin",
      useCases: ["Single origin", "Specialty roasters", "Premium coffee"],
    },
    {
      title: "Herbal Tea Pouch",
      description: "A stand-up pouch for loose herbal teas, botanical blends, and wellness beverage brands.",
      badge: "Herbal",
      useCases: ["Herbal teas", "Wellness drinks", "Botanical blends"],
    },
  ],
  "candy-boxes": [
    {
      title: "Chocolate Gift Box",
      description: "A premium rigid box for chocolate collections, truffles, and artisan confectionery gifting.",
      badge: "Chocolate gifting",
      useCases: ["Chocolatier", "Luxury gifts", "Holiday chocolate"],
    },
    {
      title: "Candy Favor Box",
      description: "A small, elegant candy box for wedding favors, event giveaways, and celebration sweets.",
      badge: "Favors",
      useCases: ["Wedding favors", "Event favors", "Celebration"],
    },
    {
      title: "Gummy Box",
      description: "A sealed carton or pouch format for gummy candy, gummy vitamins, and CBD gummies.",
      badge: "Gummies",
      useCases: ["Candy brands", "CBD gummies", "Vitamin gummies"],
    },
    {
      title: "Candy Window Box",
      description: "A confectionery window carton for displaying candy, truffles, and specialty sweets.",
      badge: "Display",
      useCases: ["Candy display", "Confectionery retail", "Sweet shops"],
    },
    {
      title: "Chocolate Truffle Box",
      description: "A luxury rigid box for artisan chocolate truffles with individual insert cavities.",
      badge: "Luxury truffles",
      useCases: ["Chocolatier", "Premium gifting", "Artisan truffles"],
    },
    {
      title: "Seasonal Confectionery Box",
      description: "A festive confectionery packaging format for Christmas, Valentine's, and holiday sweets.",
      badge: "Seasonal",
      useCases: ["Holiday candy", "Christmas sweets", "Valentine gifting"],
    },
    {
      title: "Hard Candy Box",
      description: "A compact carton for hard candies, boiled sweets, and specialty sugar confectionery.",
      badge: "Hard candy",
      useCases: ["Hard candy", "Sugar confectionery", "Specialty sweets"],
    },
    {
      title: "Candy Gift Bag",
      description: "A premium paper gift bag for candy collections, sweet hampers, and confectionery gifting.",
      badge: "Candy gifting",
      useCases: ["Candy gifting", "Sweet hampers", "Event favors"],
    },
    {
      title: "Lollipop Box",
      description: "A specialty carton for lollipops, cake pops, and novelty confectionery products.",
      badge: "Lollipops",
      useCases: ["Lollipops", "Cake pops", "Novelty sweets"],
    },
    {
      title: "Chocolate Bar Box",
      description: "A premium carton or sleeve for artisan chocolate bars and specialty confectionery products.",
      badge: "Chocolate bar",
      useCases: ["Artisan chocolate", "Specialty chocolate", "Chocolate retail"],
    },
    {
      title: "Bulk Candy Box",
      description: "A larger display or retail box for bulk candy, pick-and-mix, and wholesale confectionery.",
      badge: "Bulk",
      useCases: ["Bulk candy", "Wholesale", "Candy retail"],
    },
  ],
  "cbd-packaging": [
    {
      title: "CBD Oil Box",
      description: "A premium carton for CBD tincture bottles with compliant label panel and elegant finish.",
      badge: "Tincture",
      useCases: ["CBD oil", "Tinctures", "Wellness retail"],
    },
    {
      title: "CBD Gummy Packaging",
      description: "A child-resistant mylar pouch or carton for CBD gummies with compliant product panels.",
      badge: "Gummies",
      useCases: ["CBD gummies", "Cannabis edibles", "Wellness"],
    },
    {
      title: "CBD Cream Box",
      description: "A premium cosmetic-style carton for CBD creams, balms, and topical wellness products.",
      badge: "Topical",
      useCases: ["CBD cream", "Balms", "Topical wellness"],
    },
    {
      title: "CBD Capsule Box",
      description: "A clean carton format for CBD capsules, softgels, and supplement-adjacent cannabis products.",
      badge: "Capsules",
      useCases: ["CBD capsules", "Softgels", "Supplement retail"],
    },
    {
      title: "CBD Display Box",
      description: "A counter display structure for CBD retail in dispensaries, health stores, and wellness boutiques.",
      badge: "Retail display",
      useCases: ["CBD retail", "Dispensary", "Health stores"],
    },
    {
      title: "Hemp Oil Packaging",
      description: "A premium retail box for hemp seed oil, hemp extract, and hemp wellness products.",
      badge: "Hemp",
      useCases: ["Hemp oil", "Hemp extract", "Wellness retail"],
    },
    {
      title: "CBD Mailer Box",
      description: "A branded corrugated mailer for direct-to-consumer CBD and cannabis brand shipments.",
      badge: "DTC cannabis",
      useCases: ["DTC CBD", "Cannabis delivery", "Online orders"],
    },
    {
      title: "Cannabis Gift Box",
      description: "A premium gift box for cannabis product sets, luxury accessories, and dispensary gifting.",
      badge: "Cannabis gifting",
      useCases: ["Cannabis gifts", "Dispensary gifting", "420 sets"],
    },
    {
      title: "CBD Window Box",
      description: "A window carton for CBD products with visible product detail for retail presentation.",
      badge: "Visible product",
      useCases: ["CBD retail", "Wellness display", "Health stores"],
    },
    {
      title: "CBD Subscription Box",
      description: "A monthly CBD subscription box for wellness brand programs and recurring customer engagement.",
      badge: "Subscription",
      useCases: ["CBD subscription", "Wellness programs", "Monthly boxes"],
    },
    {
      title: "Vape Pen Box",
      description: "A compact presentation box for CBD and cannabis vape pens and cartridges.",
      badge: "Vape",
      useCases: ["Vape pens", "CBD cartridges", "Cannabis vape"],
    },
    {
      title: "Cannabis Tray Box",
      description: "A tray-and-sleeve format for cannabis product collections and dispensary retail.",
      badge: "Dispensary",
      useCases: ["Dispensary", "Cannabis collections", "Retail tray"],
    },
  ],
  "supplement-packaging": [
    {
      title: "Vitamin Carton",
      description: "A clean, professional carton for vitamin bottles, supplements, and health product retail.",
      badge: "Vitamins",
      useCases: ["Vitamins", "Supplement retail", "Health stores"],
    },
    {
      title: "Supplement Rigid Box",
      description: "A premium rigid box for supplement gift sets, launch kits, and high-end health products.",
      badge: "Premium health",
      useCases: ["Gift sets", "Launch kits", "Premium supplements"],
    },
    {
      title: "Protein Powder Bag",
      description: "A large-format barrier pouch for protein powder, pre-workout, and sports nutrition.",
      badge: "Sports nutrition",
      useCases: ["Protein powder", "Pre-workout", "Sports brands"],
    },
    {
      title: "Probiotic Box",
      description: "A clean carton format for probiotic capsules, powder, and gut health supplement products.",
      badge: "Probiotics",
      useCases: ["Probiotics", "Gut health", "Wellness"],
    },
    {
      title: "Collagen Box",
      description: "A premium carton for collagen peptides, beauty supplements, and anti-aging health products.",
      badge: "Beauty supplement",
      useCases: ["Collagen", "Beauty health", "Anti-aging"],
    },
    {
      title: "Gummy Vitamin Box",
      description: "A retail carton for gummy vitamins with a bright, engaging presentation for wellness brands.",
      badge: "Gummy vitamins",
      useCases: ["Gummy vitamins", "Children's supplements", "Wellness retail"],
    },
    {
      title: "Sleep Aid Box",
      description: "A calming, premium carton for sleep supplements, melatonin, and relaxation products.",
      badge: "Sleep health",
      useCases: ["Sleep supplements", "Melatonin", "Relaxation health"],
    },
    {
      title: "Herbal Supplement Box",
      description: "A natural-aesthetic carton for herbal supplements, botanical blends, and plant-based health.",
      badge: "Herbal",
      useCases: ["Herbal brands", "Botanical health", "Plant-based"],
    },
    {
      title: "Supplement Display Box",
      description: "A retail display box for supplement bottles and health products in pharmacy and wellness retail.",
      badge: "Retail display",
      useCases: ["Pharmacy", "Wellness retail", "Health stores"],
    },
    {
      title: "Immune Support Box",
      description: "A carton for immune health supplements, vitamin C, and wellness defense products.",
      badge: "Immune health",
      useCases: ["Immune supplements", "Vitamin C", "Defense products"],
    },
    {
      title: "Multivitamin Box",
      description: "A clean, reliable carton format for multivitamin products across health and wellness brands.",
      badge: "Multivitamin",
      useCases: ["Multivitamins", "Daily supplements", "Health retail"],
    },
    {
      title: "Kids Supplement Box",
      description: "A fun, child-friendly supplement box for gummies, chewables, and children's health products.",
      badge: "Kids health",
      useCases: ["Children's health", "Kid-friendly", "Family wellness"],
    },
    {
      title: "Omega-3 Box",
      description: "A premium carton for omega-3 fish oil, algae oil, and essential fatty acid supplements.",
      badge: "Omega",
      useCases: ["Fish oil", "Omega products", "Heart health"],
    },
    {
      title: "Sports Nutrition Box",
      description: "A bold packaging format for sports supplements, performance products, and fitness brands.",
      badge: "Fitness",
      useCases: ["Sports brands", "Fitness supplements", "Performance health"],
    },
  ],
};

const assetPoolByCategory: Record<string, string[]> = {
  "rigid-boxes": [
    "/images/clean/rigid-boxes.jpg",
    "/images/real/rigid-boxes.webp",
    "/images/clean/rigid-boxes.jpg",
    "/images/real/rigid-boxes.webp",
    "/images/clean/rigid-boxes.jpg",
  ],
  "mailer-boxes": [
    "/images/clean/mailer-boxes.webp",
    "/images/real/mailer-boxes.webp",
    "/images/clean/mailer-boxes.webp",
    "/images/clean/mailer-boxes.webp",
  ],
  "folding-cartons": [
    "/images/clean/folding-cartons.webp",
    "/images/real/folding-cartons.webp",
    "/images/clean/folding-cartons.webp",
    "/images/clean/folding-cartons.webp",
  ],
  "product-boxes": [
    "/images/clean/rigid-boxes.jpg",
    "/images/clean/rigid-boxes.jpg",
    "/images/clean/mailer-boxes.webp",
    "/images/clean/product-boxes.webp",
    "/images/clean/product-boxes.webp",
  ],
  "candle-boxes": [
    "/images/clean/candle-boxes.webp",
    "/images/real/candle-boxes.webp",
    "/images/clean/candle-boxes.webp",
    "/images/real/candle-boxes.webp",
    "/images/clean/candle-boxes.webp",
  ],
  "cosmetic-boxes": [
    "/images/clean/cosmetic-boxes.webp",
    "/images/real/cosmetic-boxes.webp",
    "/images/clean/cosmetic-boxes.webp",
    "/images/clean/cosmetic-boxes.webp",
  ],
  "perfume-boxes": [
    "/images/clean/perfume-boxes.png",
    "/images/real/perfume-boxes.webp",
    "/images/clean/perfume-boxes.png",
    "/images/real/perfume-boxes.webp",
    "/images/clean/perfume-boxes.png",
  ],
  "jewelry-boxes": [
    "/images/clean/jewelry-boxes.webp",
    "/images/real/jewelry-boxes.webp",
    "/images/clean/jewelry-boxes.webp",
    "/images/clean/jewelry-boxes.webp",
  ],
  "custom-tissue-paper": [
    "/images/clean/tissue-paper.webp",
    "/images/real/tissue-paper.webp",
    "/images/clean/tissue-paper.webp",
    "/images/clean/tissue-paper.webp",
  ],
  "paper-bags": [
    "/images/clean/paper-bags.webp",
    "/images/real/paper-bags.webp",
    "/images/clean/paper-bags.webp",
    "/images/clean/paper-bags.webp",
  ],
  sleeves: [
    "/images/clean/sleeves.webp",
    "/images/clean/folding-cartons.webp",
    "/images/clean/labels-stickers.webp",
    "/images/clean/rigid-boxes.jpg",
  ],
  "labels-and-stickers": [
    "/images/clean/labels-stickers.webp",
    "/images/clean/sleeves.webp",
    "/images/clean/tissue-paper.webp",
    "/images/clean/cosmetic-boxes.webp",
  ],
  inserts: [
    "/images/clean/inserts.jpg",
    "/images/clean/jewelry-boxes.webp",
    "/images/clean/rigid-boxes.jpg",
    "/images/clean/candle-boxes.webp",
  ],
  "sustainable-packaging": [
    "/images/clean/sustainable-packaging.png",
    "/images/clean/paper-bags.webp",
    "/images/clean/tissue-paper.webp",
    "/images/clean/folding-cartons.webp",
    "/images/clean/sustainable-packaging.png",
  ],
  "gift-boxes": [
    "/images/clean/rigid-boxes.jpg",
    "/images/real/rigid-boxes.webp",
    "/images/clean/rigid-boxes.jpg",
    "/images/real/rigid-boxes.webp",
  ],
  "window-boxes": [
    "/images/clean/folding-cartons.webp",
    "/images/real/folding-cartons.webp",
    "/images/clean/folding-cartons.webp",
    "/images/clean/candle-boxes.webp",
  ],
  "kraft-boxes": [
    "/images/clean/sustainable-packaging.png",
    "/images/real/sustainable-packaging.webp",
    "/images/clean/sustainable-packaging.png",
    "/images/clean/paper-bags.webp",
  ],
  "display-boxes": [
    "/images/clean/product-boxes.webp",
    "/images/real/product-boxes.webp",
    "/images/clean/product-boxes.webp",
    "/images/clean/product-boxes.webp",
  ],
  "corrugated-boxes": [
    "/images/clean/mailer-boxes.webp",
    "/images/real/mailer-boxes.webp",
    "/images/clean/mailer-boxes.webp",
    "/images/clean/mailer-boxes.webp",
  ],
  "soap-boxes": [
    "/images/clean/candle-boxes.webp",
    "/images/real/candle-boxes.webp",
    "/images/clean/candle-boxes.webp",
    "/images/clean/sustainable-packaging.png",
  ],
  "mylar-bags": [
    "/images/real/product-boxes.webp",
    "/images/clean/folding-cartons.webp",
    "/images/clean/folding-cartons.webp",
  ],
  "wax-melt-boxes": [
    "/images/clean/candle-boxes.webp",
    "/images/real/candle-boxes.webp",
    "/images/clean/candle-boxes.webp",
    "/images/clean/candle-boxes.webp",
  ],
  "food-boxes": [
    "/images/clean/folding-cartons.webp",
    "/images/real/folding-cartons.webp",
    "/images/clean/folding-cartons.webp",
    "/images/clean/folding-cartons.webp",
  ],
  "bakery-boxes": [
    "/images/clean/folding-cartons.webp",
    "/images/real/folding-cartons.webp",
    "/images/clean/rigid-boxes.jpg",
    "/images/clean/folding-cartons.webp",
  ],
  "cake-boxes": [
    "/images/clean/rigid-boxes.jpg",
    "/images/clean/folding-cartons.webp",
    "/images/clean/rigid-boxes.jpg",
    "/images/clean/folding-cartons.webp",
  ],
  "coffee-tea-boxes": [
    "/images/clean/folding-cartons.webp",
    "/images/real/sustainable-packaging.webp",
    "/images/clean/folding-cartons.webp",
    "/images/real/rigid-boxes.webp",
  ],
  "candy-boxes": [
    "/images/real/folding-cartons.webp",
    "/images/real/rigid-boxes.webp",
    "/images/clean/folding-cartons.webp",
    "/images/clean/folding-cartons.webp",
  ],
  "cbd-packaging": [
    "/images/clean/product-boxes.webp",
    "/images/real/product-boxes.webp",
    "/images/clean/product-boxes.webp",
    "/images/clean/product-boxes.webp",
  ],
  "supplement-packaging": [
    "/images/clean/folding-cartons.webp",
    "/images/real/folding-cartons.webp",
    "/images/clean/folding-cartons.webp",
    "/images/clean/product-boxes.webp",
  ],
};

const styleRecords = buildStyleRecords();

export const productStyles = Object.values(styleRecords);

export function getProductStyleBySlug(slug: string) {
  return styleRecords[slug];
}

export function getProductStylesByCategory(categorySlug: string) {
  return productStyles.filter((style) => style.categorySlug === categorySlug);
}

export function getImagePoolByCategory(categorySlug: string) {
  const styles = getProductStylesByCategory(categorySlug);

  return [
    ...(assetPoolByCategory[categorySlug] ?? []),
    ...styles.flatMap((style) => [
      style.image,
      style.fallbackImage,
      ...style.galleryImages,
    ]),
  ].filter(
    (image, index, array): image is string =>
      Boolean(image) && array.indexOf(image) === index,
  );
}

export function getRelatedProductStyles(style: ProductStyle) {
  return style.relatedProducts
    .map((slug) => getProductStyleBySlug(slug))
    .filter((item): item is ProductStyle => Boolean(item));
}

function buildStyleRecords() {
  const records: Record<string, ProductStyle> = {};

  categories.forEach((category) => {
    const seeds =
      styleSeedsByCategory[category.slug] ??
      category.variants.map((title) => ({
        title,
        description: `A premium ${category.name.toLowerCase()} format shaped for cleaner presentation and stronger structure.`,
        badge: "Premium format",
      }));

    const pool = assetPoolByCategory[category.slug] ?? [category.image];
    let previousImage = "";

    const styles = seeds.map((seed, index) => {
      const primaryImage = pickDistinctImage(pool, index, previousImage, category.image);
      previousImage = primaryImage;
      const galleryImages = [primaryImage, ...rotateImages(pool, primaryImage)].slice(0, 3);
      const slug = `${category.slug}-${slugify(seed.title)}`;
      const useCases = seed.useCases ?? buildUseCases(category);

      const style: ProductStyle = {
        title: seed.title,
        slug,
        description: seed.description,
        categorySlug: category.slug,
        image: primaryImage,
        fallbackImage: category.image,
        galleryImages,
        useCases,
        materialOptions: category.materials,
        finishOptions: category.finishes,
        relatedProducts: [],
        badge: seed.badge,
        overview: buildOverview(seed.title, category),
        dimensionsCopy: buildDimensionsCopy(seed.title, category),
        keyHighlights: buildHighlights(seed, category),
        faq: buildStyleFaqs(seed.title, category),
      };

      records[slug] = style;
      return style;
    });

    styles.forEach((style) => {
      style.relatedProducts = styles
        .filter((item) => item.slug !== style.slug)
        .slice(0, 3)
        .map((item) => item.slug);
    });
  });

  return records;
}

function buildUseCases(category: Category) {
  return [
    ...category.industries.slice(0, 3),
    "Premium gifting",
  ];
}

function buildOverview(title: string, category: Category) {
  return `${title} sits within our ${category.name.toLowerCase()} collection and is developed for brands that need more control over structure, finish, and the way the packaging is perceived at first touch. It works best when the goal is to align protection, presentation, and brand tone in one cleaner packaging format.`;
}

function buildDimensionsCopy(title: string, category: Category) {
  return `${title} can be developed in custom dimensions around the product, insert depth, and the type of reveal you want to create. We can also shape interior print, exterior print, specialty closures, and support structures around the broader ${category.name.toLowerCase()} system.`;
}

function buildHighlights(seed: StyleSeed, category: Category) {
  return [
    `${seed.badge} structure with a more considered visual hierarchy`,
    `Works with ${category.finishes.slice(0, 2).join(" and ").toLowerCase()} finishes`,
    "Can be shaped around inserts, custom sizing, and premium presentation needs",
    "Suitable for quote-first packaging programs with low minimum flexibility",
    `Supports ${category.industries.slice(0, 2).join(" and ").toLowerCase()} use cases`,
    "Can be positioned for retail, gifting, or direct-to-consumer delivery",
  ];
}

function buildStyleFaqs(title: string, category: Category) {
  const categoryName = category.name.toLowerCase();

  return [
    {
      question: `What is a ${title.toLowerCase()}?`,
      answer: `A ${title.toLowerCase()} is a premium packaging format within our ${categoryName} collection, developed to balance structure, presentation, and a cleaner customer-facing reveal.`,
    },
    {
      question: `Can ${title.toLowerCase()} be made in custom sizes?`,
      answer:
        "Yes. We build packaging around the product dimensions, insert needs, and the intended customer experience rather than relying only on fixed stock sizes.",
    },
    {
      question: `Is ${title.toLowerCase()} suitable for premium packaging?`,
      answer:
        "Yes. This style is especially useful where refined structure, finish compatibility, and brand perception all matter.",
    },
    {
      question: `Can ${title.toLowerCase()} include inserts?`,
      answer:
        "Yes. Inserts can be added where fit, protection, and cleaner internal presentation are important.",
    },
    {
      question: `What finishes work best with ${title.toLowerCase()}?`,
      answer: `Popular finish routes include ${category.finishes.slice(0, 3).join(", ").toLowerCase()}, depending on the desired brand direction and material choice.`,
    },
    {
      question: `How do I request a quote for ${title.toLowerCase()}?`,
      answer:
        "You can request a quote by sharing the product type, quantity, dimensions, material preferences, and finishing direction through our quote form or contact page.",
    },
  ];
}

function pickDistinctImage(
  pool: string[],
  index: number,
  previousImage: string,
  fallback: string,
) {
  if (pool.length === 0) {
    return fallback;
  }

  let image = pool[index % pool.length] ?? fallback;

  if (image === previousImage && pool.length > 1) {
    image = pool[(index + 1) % pool.length] ?? fallback;
  }

  return image;
}

function rotateImages(pool: string[], primaryImage: string) {
  const unique = pool.filter((image, index) => pool.indexOf(image) === index);
  const filtered = unique.filter((image) => image !== primaryImage);
  return filtered.length > 0 ? filtered : unique;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getCategoryForStyle(style: ProductStyle) {
  return getCategoryBySlug(style.categorySlug);
}
