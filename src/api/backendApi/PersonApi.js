import BaseApi from "./BaseApi";

const endpoint = {
  base: "/people",
  search: "/people/search",
};

class PersonApi extends BaseApi {
  constructor() {
    super(endpoint);
  }
}

export default PersonApi;
