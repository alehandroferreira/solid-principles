class CSVFileReader {
  read(file: string): any {
    console.log('Lendo arquivo CSV: ', file);
    return [{ name: 'João', value: 100 }];
  }
}

class JSONExporter {
  export(data: any[]): string {
    const jsonReport = JSON.stringify(data);
    console.log(`Exportando relatório em JSON: ${jsonReport}`);
    return jsonReport;
  }
}

class ReportService {
  constructor(
    private fileReader: CSVFileReader,
    private exporter: JSONExporter,
  ) {}

  processFileAndExport(file: string) {
    const data = this.fileReader.read(file);
    this.exporter.export(data);
  }
}

// Uso
const reportService = new ReportService(new CSVFileReader(), new JSONExporter());
reportService.processFileAndExport('report.csv');
