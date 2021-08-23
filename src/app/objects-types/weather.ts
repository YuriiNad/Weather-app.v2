
//Complitely describes the weather item that will be used for WeatherDataComponent

export interface WeatherItem {
  name: string | null,
  country: string,
  temperature: number | null,
  feels_like: number | null,
  icon: string,
  description: string,
  pressure: number | null,
  humidity: number | null,
  lat: number | null,
  lon: number | null,
}