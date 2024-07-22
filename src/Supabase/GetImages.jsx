import React, { useEffect, useState } from 'react'

const GetImages = () => {
    const imageNames = ['CF0001JMU.jpg', 'CF0002JMU.jpg'];
    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchImages = async () => {
            const urls = await Promise.all(imageNames.map(async (imageName) => {
                const { data } = supabase
                    .storage
                    .from('image-bucket')
                    .getPublicUrl(`Avatars/${imageName}`);
                return data.publicUrl;
            }));
            setImages(urls);
        };
        fetchImages();
    }, []);
    console.log(images[0]);

  return (
    <div>GetImages</div>
  )
}

export default GetImages