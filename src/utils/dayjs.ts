import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import th from "dayjs/locale/th";

dayjs.locale(th);
dayjs.extend(localizedFormat);

export default dayjs;
