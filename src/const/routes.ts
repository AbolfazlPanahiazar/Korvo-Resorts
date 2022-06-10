interface IRoutes {
  resortsList: string;
  resortDetails: string;
  bucket: string;
}

export const ROUTES: IRoutes = {
  resortsList: "/",
  resortDetails: "/resorts/:id",
  bucket: "/bucket",
};
