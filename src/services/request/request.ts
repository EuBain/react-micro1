import axios from "axios";

// const baseURL = "http://localhost:8889/";

const request = axios.create({
  // baseURL: baseURL,
});

// GET 请求
export const GET = async (url: string, params?: object, headers?: object) => {
  try {
    const result = await request({
      url,
      method: "GET",
      params: params,
      headers,
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// POST 请求
export const POST = async (
  url: string,
  data?: object,
  params?: object,
  headers?: object
) => {
  try {
    const result = await request({
      url,
      method: "POST",
      data: data,
      params: params,
      headers,
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
