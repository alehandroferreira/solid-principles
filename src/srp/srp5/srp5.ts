class FileProcessor {
  process(file: File) {
    console.log('Lendo arquivo CSV: ', file.name);
    const data = [{ name: 'João', value: 100 }]; // Dados simulados

    // Exporar JSON
    const jsonReport = JSON.stringify(data);
    console.log(`Exportando relatório em JSON: ${jsonReport}`);
  }
}
