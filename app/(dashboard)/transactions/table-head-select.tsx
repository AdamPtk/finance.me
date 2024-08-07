import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  columnIndex: number;
  selectedCoulmns: Record<string, string | null>;
  onChange: (columnIndex: number, value: string | null) => void;
};

const options = ["Amount", "Payee", "Date"];

export const TableHeadSelect = ({
  columnIndex,
  selectedCoulmns,
  onChange,
}: Props) => {
  const currentSelection = selectedCoulmns[`column_${columnIndex}`];

  return (
    <Select
      value={currentSelection || ""}
      onValueChange={(value) => {
        onChange(columnIndex, value);
      }}
    >
      <SelectTrigger
        className={cn(
          "focus:ring-offset-0 focus:ring-transparent outline-none border-none bg-transparent capitalize",
          currentSelection && "text-blue-500"
        )}
      >
        <SelectValue placeholder="Skip" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="skip">Skip</SelectItem>
        {options.map((option, index) => {
          const disabled =
            Object.values(selectedCoulmns).includes(option) &&
            selectedCoulmns[`column_${columnIndex}`] !== option;

          return (
            <SelectItem key={index} value={option} disabled={disabled}>
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
