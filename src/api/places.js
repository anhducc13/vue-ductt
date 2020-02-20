import { normalService } from "@/utils/request";

export function fetchCities() {
  return normalService.get("/cities").then(res => res.data.data);
}

export function fetchDistricts(params) {
  return normalService.get("/districts", { params }).then(res => res.data.data);
}

export function fetchWards(params) {
  return normalService.get("/wards", { params }).then(res => res.data.data);
}
