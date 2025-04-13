import type { Image } from "../interface/Image";

/**
 * Devuelve una lista de imágenes
 * 
 * @returns 
 */
export function getImages(): Image[] {

    return [
        { src: "./images/slides/slide1.jpg", title: "Ingeniería y soporte", alt: "Redes y Seguridad" },
        { src: "./images/slides/slide2.jpg", title: "Calidad al mejor precio", alt: "Soluciones en Sistemas" },
        { src: "./images/slides/slide3.jpg", title: "Instalación y configuración", alt: "Desde el hardware hasta el software, configuramos todo" }
    ];
}