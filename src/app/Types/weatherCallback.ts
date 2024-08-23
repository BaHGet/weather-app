type weather = {
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
    dt: number,
    timezone: number,
    name: string,
}