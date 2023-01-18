import request, { FAIL, SUCCESS } from "../utils/Request";

const BoardService = {
  getVoc: async () => {
    try {
      const response = await request.get(`/`);

      if (request.isSuccess(response)) {
        return {
          ...response,
          status: SUCCESS
        };
      }
      return { status: FAIL };
    } catch (error) {
      return {
        status: FAIL
      };
    }
  },
  writeVoc: async (formData) => {
    try {
      const response = await request.post(`/`, formData);

      if (request.isSuccess(response)) {
        return {
          ...response,
          status: SUCCESS
        };
      }
      return { status: FAIL };
    } catch (error) {
      return {
        status: FAIL
      };
    }
  }
};

export default BoardService;
