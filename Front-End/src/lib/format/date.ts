import dayjs, { type Dayjs } from "dayjs";
import "dayjs/locale/vi";

dayjs.locale("vi");

type DateInput = string | number | Date | Dayjs | null | undefined;

export function formatDate(value: DateInput, fallback = "—"): string {
  if (!value) return fallback;
  const d = dayjs(value);
  return d.isValid() ? d.format("DD/MM/YYYY") : fallback;
}

export function formatDateTime(value: DateInput, fallback = "—"): string {
  if (!value) return fallback;
  const d = dayjs(value);
  return d.isValid() ? d.format("DD/MM/YYYY HH:mm") : fallback;
}

export function toApiDate(value: Dayjs | null | undefined): string | undefined {
  return value?.isValid() ? value.format("YYYY-MM-DD") : undefined;
}

export { dayjs };
