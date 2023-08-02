export async function fetchTechStacksData() {
  const apiUrl = process.env.NEXTJS_PUBLIC_WORDPRESS_API_URL + 'techstack';
  const response = await fetch(apiUrl, { next: { revalidate: 60 } });
  const data = await response.json();
  return data;
}