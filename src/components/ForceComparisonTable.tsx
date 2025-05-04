
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ForceComparisonTable = () => {
  const data = [
    {
      category: "Личный состав",
      soviet: "2.5 млн. человек",
      german: "1 млн. человек",
      ratio: "2.5:1"
    },
    {
      category: "Орудия и миномёты",
      soviet: "41 600",
      german: "10 400",
      ratio: "4:1"
    },
    {
      category: "Танки и САУ",
      soviet: "6 250",
      german: "1 500",
      ratio: "4.2:1"
    },
    {
      category: "Боевые самолёты",
      soviet: "7 500",
      german: "3 300",
      ratio: "2.3:1"
    }
  ];

  return (
    <div className="overflow-x-auto">
      <Table className="border-collapse border border-gray-700">
        <TableHeader>
          <TableRow className="bg-gray-700">
            <TableHead className="text-white border border-gray-600 w-1/4">Категория</TableHead>
            <TableHead className="text-white border border-gray-600 text-center w-1/4">Советские войска</TableHead>
            <TableHead className="text-white border border-gray-600 text-center w-1/4">Германские войска</TableHead>
            <TableHead className="text-white border border-gray-600 text-center w-1/4">Соотношение</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
              <TableCell className="font-semibold border border-gray-700">{row.category}</TableCell>
              <TableCell className="border border-gray-700 text-center">{row.soviet}</TableCell>
              <TableCell className="border border-gray-700 text-center">{row.german}</TableCell>
              <TableCell className="border border-gray-700 text-center font-bold text-red-400">{row.ratio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ForceComparisonTable;
