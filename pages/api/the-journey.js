// /pages/api/get-images.js
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with environment variables
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
    try {
        const { resources } = await cloudinary.search
            .expression("folder:the-journey/*") // Replace 'your-folder-name' with your folder's name
            .sort_by("public_id", "asc") // Sort images by most recent
            // .max_results(20) // Limit to 20 images
            .execute();

        // Map resources to return only the URLs
        const imageUrls = resources.map((img) => img.secure_url);
        res.status(200).json(imageUrls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
