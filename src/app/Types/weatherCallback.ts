export type Weather = {
    location: { lat: number, lon: number },
    title: string,
    descraiption: string,
    icon: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        humidity: number,
    },
    wind: {
        speed: number,
        deg: number,
    },
    sys: {
        country: string,
        sunrise: number,
        sunset: number
    }
    dt: number,
    timezone: number,
    name: string,
}