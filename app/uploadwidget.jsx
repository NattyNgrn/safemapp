// "use client"
// import { CldUploadWidget } from 'next-cloudinary';

// export const UnsignedUpload = ({ options, setPhotourl }) => {
//   window.cloudina
//   return (
//     <>
//       <CldUploadWidget
//         signatureEndpoint={}
//         uploadPreset="next-cloudinary-unsigned"
//         onUpload={(result, widget) => {
//           console.log('UnsignedUpload:widget:upload', result);
//           setPhotourl(result?.info);
//           widget.close();
//         }}
//         onQueuesStart={(result, { widget, minimize }) => {
//           console.log('UnsignedUpload:widget:queues-start', widget);
//         }}
//         onOpen={(widget) => {
//           console.log('UnsignedUpload:widget:open', widget);
//         }}
//         onClose={(widget) => {
//           console.log('UnsignedUpload:widget:close', widget);
//         }}
//         options={options}
//       >
//         {({ open }) => {
//           function handleOnClick(e) {
//             setPhotourl(undefined);
//             e.preventDefault();
//             open();
//           }
//           return (
//             <button onClick={handleOnClick}>
//               Upload an Image
//             </button>
//           );
//         }}
//       </CldUploadWidget>

//       {/* <p>URL: { resource?.secure_url }</p> */}
//     </>
//   )
// }
