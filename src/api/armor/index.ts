import axios from "../../utils/axios";

export const getArmorsList = async () => {
  const { data } = await axios.get('https://eldenring.fanapis.com/api/armors');

  return data;
};