import type { Image } from "../interface/Image";

/**
 * Devuelve una lista de imágenes
 * 
 * @returns 
 */
export function getImages(): Image[] {

    return [
        { src: "./images/slides/slide1.jpg", title: "Computadora portátil", alt: "Computadora portátil" },
        { src: "./images/slides/slide2.jpg", title: "Soporte técnico", alt: "Soporte técnico" },
        { src: "./images/slides/slide3.jpg", title: "Mantenimiento a tarjeta madre", alt: "Mantenimiento a tarjeta madre" }
    ];
}