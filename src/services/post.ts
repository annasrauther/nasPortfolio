import { POSTS_ENDPOINT } from './endpoints'

export const getPostArchive = async () => {
	const response = await fetch(POSTS_ENDPOINT, {
		next: { revalidate: 60 },
	})
	const data = await response.json()
	return data
}

export const getPostSingle = async (slug: string) => {
	const response = await fetch(POSTS_ENDPOINT + '?slug=' + slug, {
		next: { revalidate: 60 },
	})
	const data: any[] = await response.json()
	if (data.length > 0) {
		return data[0]
	} else {
		return null
	}
}