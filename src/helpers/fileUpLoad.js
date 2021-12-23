const fileUpLoad = async ( file ) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dbmqyx6gp/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'journalScreenCloudinary');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, { 
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudRes = await resp.json();

            return cloudRes.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        console.log(error);
    }
}

export default fileUpLoad
