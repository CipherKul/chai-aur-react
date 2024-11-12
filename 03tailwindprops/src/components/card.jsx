import React from "react"; 

function Card(username ,btntext) {
    console.log("props", username )  
   
     
            return (
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img 
                        className="w-full"
                        src="https://picsum.photos/400/300" 
                        alt="Card Image" 
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Card Title</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #photography
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #travel
                        </span>
                    </div>
                </div>
            )
        }
    
    
    export default Card
