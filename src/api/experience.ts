export async function fetchExperienceData() {
  const apiUrl = process.env.NEXTJS_PUBLIC_WORDPRESS_API_URL + 'experience';
  const response = await fetch(apiUrl, { next: { revalidate: 60 } });
  const data = await response.json();
  return data;
}