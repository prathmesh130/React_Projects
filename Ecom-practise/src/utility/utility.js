export const getDiscountedPrice = (Originalprice, Discountpercentage) => {
    const Discountedprice = Originalprice - (Discountpercentage * Originalprice / 100)
    return Math.floor(Discountedprice)
}

export const categoryItemsImages = [
    "https://epicpadprinting.com/public/img/indus/Electronics.png",
    "https://epicpadprinting.com/public/img/indus/Footwear.png",
    "https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png",
    "https://epicpadprinting.com/public/img/indus/Cosmetics.png",
    "https://epicpadprinting.com/public/img/indus/Automotive.png",
    "https://epicpadprinting.com/public/img/indus/Promotional.png",
    "https://epicpadprinting.com/public/img/indus/Sports.png",
    "https://epicpadprinting.com/public/img/indus/Stationery.png",
    "https://epicpadprinting.com/public/img/indus/Tools.png",
    "https://epicpadprinting.com/public/img/indus/Utensils.png",
    "https://epicpadprinting.com/public/img/indus/Stationery.png",
    "https://epicpadprinting.com/public/img/indus/Tools.png",
    "https://epicpadprinting.com/public/img/indus/Utensils.png",
    "https://epicpadprinting.com/public/img/indus/Cosmetics.png",
    "https://epicpadprinting.com/public/img/indus/Automotive.png",
    "https://epicpadprinting.com/public/img/indus/Promotional.png",
    "https://epicpadprinting.com/public/img/indus/Sports.png",
    "https://epicpadprinting.com/public/img/indus/Stationery.png",
    "https://epicpadprinting.com/public/img/indus/Electronics.png",
    "https://epicpadprinting.com/public/img/indus/Footwear.png",
]