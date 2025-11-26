// Unicode font transformation maps
const boldMap: Record<string, string> = {
  A: "𝗔",
  B: "𝗕",
  C: "𝗖",
  D: "𝗗",
  E: "𝗘",
  F: "𝗙",
  G: "𝗚",
  H: "𝗛",
  I: "𝗜",
  J: "𝗝",
  K: "𝗞",
  L: "𝗟",
  M: "𝗠",
  N: "𝗡",
  O: "𝗢",
  P: "𝗣",
  Q: "𝗤",
  R: "𝗥",
  S: "𝗦",
  T: "𝗧",
  U: "𝗨",
  V: "𝗩",
  W: "𝗪",
  X: "𝗫",
  Y: "𝗬",
  Z: "𝗭",
  a: "𝗮",
  b: "𝗯",
  c: "𝗰",
  d: "𝗱",
  e: "𝗲",
  f: "𝗳",
  g: "𝗴",
  h: "𝗵",
  i: "𝗶",
  j: "𝗷",
  k: "𝗸",
  l: "𝗹",
  m: "𝗺",
  n: "𝗻",
  o: "𝗼",
  p: "𝗽",
  q: "𝗾",
  r: "𝗿",
  s: "𝘀",
  t: "𝘁",
  u: "𝘂",
  v: "𝘃",
  w: "𝘄",
  x: "𝘅",
  y: "𝘆",
  z: "𝘇",
  "0": "𝟬",
  "1": "𝟭",
  "2": "𝟮",
  "3": "𝟯",
  "4": "𝟰",
  "5": "𝟱",
  "6": "𝟲",
  "7": "𝟳",
  "8": "𝟴",
  "9": "𝟵",
};

const monoMap: Record<string, string> = {
  A: "𝙰",
  B: "𝙱",
  C: "𝙲",
  D: "𝙳",
  E: "𝙴",
  F: "𝙵",
  G: "𝙶",
  H: "𝙷",
  I: "𝙸",
  J: "𝙹",
  K: "𝙺",
  L: "𝙻",
  M: "𝙼",
  N: "𝙽",
  O: "𝙾",
  P: "𝙿",
  Q: "𝚀",
  R: "𝚁",
  S: "𝚂",
  T: "𝚃",
  U: "𝚄",
  V: "𝚅",
  W: "𝚆",
  X: "𝚇",
  Y: "𝚈",
  Z: "𝚉",
  a: "𝚊",
  b: "𝚋",
  c: "𝚌",
  d: "𝚍",
  e: "𝚎",
  f: "𝚏",
  g: "𝚐",
  h: "𝚑",
  i: "𝚒",
  j: "𝚓",
  k: "𝚔",
  l: "𝚕",
  m: "𝚖",
  n: "𝚗",
  o: "𝚘",
  p: "𝚙",
  q: "𝚚",
  r: "𝚛",
  s: "𝚜",
  t: "𝚝",
  u: "𝚞",
  v: "𝚟",
  w: "𝚠",
  x: "𝚡",
  y: "𝚢",
  z: "𝚣",
  "0": "𝟶",
  "1": "𝟷",
  "2": "𝟸",
  "3": "𝟹",
  "4": "𝟺",
  "5": "𝟻",
  "6": "𝟼",
  "7": "𝟽",
  "8": "𝟾",
  "9": "𝟿",
};

const italicMap: Record<string, string> = {
  A: "𝘈",
  B: "𝘉",
  C: "𝘊",
  D: "𝘋",
  E: "𝘌",
  F: "𝘍",
  G: "𝘎",
  H: "𝘏",
  I: "𝘐",
  J: "𝘑",
  K: "𝘒",
  L: "𝘓",
  M: "𝘔",
  N: "𝘕",
  O: "𝘖",
  P: "𝘗",
  Q: "𝘘",
  R: "𝘙",
  S: "𝘚",
  T: "𝘛",
  U: "𝘜",
  V: "𝘝",
  W: "𝘞",
  X: "𝘟",
  Y: "𝘠",
  Z: "𝘡",
  a: "𝘢",
  b: "𝘣",
  c: "𝘤",
  d: "𝘥",
  e: "𝘦",
  f: "𝘧",
  g: "𝘨",
  h: "𝘩",
  i: "𝘪",
  j: "𝘫",
  k: "𝘬",
  l: "𝘭",
  m: "𝘮",
  n: "𝘯",
  o: "𝘰",
  p: "𝘱",
  q: "𝘲",
  r: "𝘳",
  s: "𝘴",
  t: "𝘵",
  u: "𝘶",
  v: "𝘷",
  w: "𝘸",
  x: "𝘹",
  y: "𝘺",
  z: "𝘻",
};

// Colored circle/square emoji maps for visual "color" effect
const colorEmojis = ["🟢", "🔵", "🟣", "🟠", "🔴", "🟡"];

// Transform text to Unicode styled font
export function toBold(text: string): string {
  return text
    .split("")
    .map((char) => boldMap[char] || char)
    .join("");
}

export function toMono(text: string): string {
  return text
    .split("")
    .map((char) => monoMap[char] || char)
    .join("");
}

export function toItalic(text: string): string {
  return text
    .split("")
    .map((char) => italicMap[char] || char)
    .join("");
}

// Create rainbow-colored text effect using emojis
export function toRainbow(text: string): string {
  let result = "";
  let colorIndex = 0;
  for (const char of text) {
    if (char !== " " && char !== "\n") {
      result += colorEmojis[colorIndex % colorEmojis.length] + char;
      colorIndex++;
    } else {
      result += char;
    }
  }
  return result;
}

// Decorative elements
export const decorations = {
  topBorder: "╔════════════════════════════════╗",
  bottomBorder: "╚════════════════════════════════╝",
  sideBorder: "║",
  divider: "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈",
  thinDivider: "─────────────────────────────────",
  wavyDivider: "〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰",
  starDivider: "✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦",
  sparkle: "✨",
  arrow: "➤",
  bullet: "◆",
  check: "✅",
  star: "⭐",
  fire: "🔥",
  rocket: "🚀",
  bell: "🔔",
  diamond: "💎",
  plant: "🌱",
  recycle: "♻️",
};

// Format a beautiful structured message for Signal
export function formatSignalMessage(data: {
  name: string;
  material: string;
  quantity: string;
  location: string;
  phone: string;
  imageCount?: number;
}): string {
  const { name, material, quantity, location, phone, imageCount = 0 } = data;

  const header = `${decorations.sparkle} ${toBold("НОВО ЗАПИТВАНЕ")} ${
    decorations.sparkle
  }`;

  // Add image info if images are attached
  const imageInfo =
    imageCount > 0
      ? `\n\n📸 ${toBold("СНИМКИ")}: ${toMono(imageCount.toString())} ${
          imageCount === 1 ? "прикачена" : "прикачени"
        }`
      : "";

  const message = `
${decorations.topBorder}
${decorations.sideBorder}  ${decorations.recycle} ${
    decorations.fire
  } ${header} ${decorations.fire} ${decorations.recycle}  ${
    decorations.sideBorder
  }
${decorations.bottomBorder}

${decorations.starDivider}

${decorations.bullet} ${toBold("КОНТАКТ")}
   ${decorations.arrow} ${toItalic("Име")}: ${toMono(name)}
   ${decorations.arrow} ${toItalic("Телефон")}: ${toMono(phone)}

${decorations.divider}

${decorations.bullet} ${toBold("ДЕТАЙЛИ")}
   🔹 ${toItalic("Материал")}: ${toBold(material)}
   🔹 ${toItalic("Количество")}: ${toBold(quantity)}
   🔹 ${toItalic("Локация")}: ${toBold(location)}${imageInfo}

${decorations.wavyDivider}

${decorations.bell} ${toItalic("Моля, свържете се с клиента!")}
${decorations.star} ${toItalic("Благодарим за използването на нашата услуга!")}

${decorations.diamond}${decorations.plant}${decorations.recycle} ${toBold(
    "EcoRecycle"
  )} ${decorations.recycle}${decorations.plant}${decorations.diamond}
`.trim();

  return message;
}

export async function sendSignalNotification(message: string) {
  // Trim potential whitespace from env vars just to be safe
  const apiKey = process.env.SIGNAL_API_KEY?.trim();
  const phoneNumber = process.env.SIGNAL_PHONE_NUMBER?.trim();

  if (!apiKey || !phoneNumber) {
    console.warn("Signal credentials not found. Skipping notification.");
    return;
  }

  // NOTE: CallMeBot now sometimes uses UUIDs instead of phone numbers for privacy/technical reasons.
  // We do NOT strip special characters anymore, because UUIDs contain dashes.
  // If the user provides a phone number like "+359...", it will still work fine as is.
  // If they provide a UUID "6fb70b...", it will also work.

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // CallMeBot Signal API URL
  // Using signal.callmebot.com as per the user's latest successful example URL
  const url = `https://signal.callmebot.com/signal/send.php?phone=${phoneNumber}&apikey=${apiKey}&text=${encodedMessage}`;

  console.log(`Sending Signal notification to ${phoneNumber}...`);

  try {
    const response = await fetch(url);
    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(
        `Signal API responded with status: ${response.status} - ${responseText}`
      );
    }

    console.log("Signal API Response:", responseText);
  } catch (error) {
    console.error("Failed to send Signal notification:", error);
  }
}

// Send an image via Signal using CallMeBot API
export async function sendSignalImage(imageUrl: string, caption?: string) {
  const apiKey = process.env.SIGNAL_API_KEY?.trim();
  const phoneNumber = process.env.SIGNAL_PHONE_NUMBER?.trim();

  if (!apiKey || !phoneNumber) {
    console.warn("Signal credentials not found. Skipping image notification.");
    return;
  }

  // Encode the image URL
  const encodedImageUrl = encodeURIComponent(imageUrl);

  // Build the URL with image parameter
  // CallMeBot supports: image=[url_image]
  let url = `https://signal.callmebot.com/signal/send.php?phone=${phoneNumber}&apikey=${apiKey}&image=${encodedImageUrl}`;

  // Add caption if provided
  if (caption) {
    url += `&text=${encodeURIComponent(caption)}`;
  }

  console.log(`Sending Signal image to ${phoneNumber}...`);

  try {
    const response = await fetch(url);
    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(
        `Signal Image API responded with status: ${response.status} - ${responseText}`
      );
    }

    console.log("Signal Image API Response:", responseText);
  } catch (error) {
    console.error("Failed to send Signal image:", error);
  }
}

// Send multiple images with a small delay between each to avoid rate limiting
export async function sendSignalImages(imageUrls: string[]) {
  const apiKey = process.env.SIGNAL_API_KEY?.trim();
  const phoneNumber = process.env.SIGNAL_PHONE_NUMBER?.trim();

  if (!apiKey || !phoneNumber) {
    console.warn("Signal credentials not found. Skipping image notifications.");
    return;
  }

  if (imageUrls.length === 0) {
    return;
  }

  console.log(`Sending ${imageUrls.length} images to Signal...`);

  for (let i = 0; i < imageUrls.length; i++) {
    const imageUrl = imageUrls[i];
    const caption = `📷 ${toItalic("Снимка")} ${toBold(
      (i + 1).toString()
    )}/${toBold(imageUrls.length.toString())}`;

    try {
      await sendSignalImage(imageUrl, caption);

      // Add a small delay between images to avoid rate limiting (1 second)
      if (i < imageUrls.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Failed to send image ${i + 1}:`, error);
    }
  }

  console.log("All images sent to Signal.");
}

// Helper to generate image URLs for a request
export function getImageUrls(
  baseUrl: string,
  requestId: string,
  imageCount: number
): string[] {
  const urls: string[] = [];
  for (let i = 0; i < imageCount; i++) {
    urls.push(`${baseUrl}/api/images/${requestId}/${i}`);
  }
  return urls;
}
