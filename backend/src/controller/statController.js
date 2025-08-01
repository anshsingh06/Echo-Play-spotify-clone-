import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";

export const getStats = async (req, res, next) => {
	try {
		const [totalSongs, totalAlbums, totalUsers] = await Promise.all([
			Song.countDocuments(),
			Album.countDocuments(),
			User.countDocuments(),
		]);

		res.status(200).json({
			totalAlbums,
			totalSongs,
			totalUsers,
		});
	} catch (error) {
		next(error);
	}
};