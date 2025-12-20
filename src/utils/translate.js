export async function translate(text, target) {
  if (!text || target === "en") return text;

  const res = await fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`
  );
  const data = await res.json();
  return data[0][0][0];
}
