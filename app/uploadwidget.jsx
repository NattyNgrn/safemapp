import { useEffect, useRef } from "react";

const UploadWidget = ({setUrl, setUploading}) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=> {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'do0w2gqax',
            uploadPreset: 'yj6v31wv'
        }, function(error, result) {
            if(error){
                setUploading(false);
                return;
            }
            if(!result || result.event != "success") {
                setUploading(true);
                return;
            } 
            setUploading(false);
            
            console.log(result)
            setUrl(result.info.url);
        });
    }, [])
    return (
        <button onClick={()=> widgetRef.current.open()} class="bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Upload </button>
    )
}

export default UploadWidget;