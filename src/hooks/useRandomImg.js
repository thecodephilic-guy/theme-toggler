const coverURL = [
    "https://images3.alphacoders.com/131/1319314.jpeg",
    "https://images4.alphacoders.com/135/1351468.jpeg",
    "https://images5.alphacoders.com/132/1320110.png",
    "https://images.alphacoders.com/135/1354061.jpeg",
    "https://images8.alphacoders.com/135/1355094.jpeg",
    
]

const randomIndex = Math.floor(Math.random()*5)

export default function useRandomImg(){
    return coverURL[randomIndex];
}