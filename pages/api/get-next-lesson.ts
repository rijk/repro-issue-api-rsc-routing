import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	next: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// Get user's progress in the course to determine what the next lesson for them is
	res.redirect('/lesson-x')
}
