
export interface ServiceInfo {
  threads: number;
  service: Service[];
}

interface Service {
  name: string;
  url: string;
  version: string;
}
