const fs = require('fs').promises;

const text = '{"name": "Employee 1 Name", "salary": 2000}';
const newText = '\n{"name": "Employee 3 Name", "salary": 6000}';

const writeFile = async () => {
    try {
        await fs.writeFile('employees.json', text);
        console.log('Write Successful!');
    } catch (err) {
        console.error(err);
    }
};

const readFile = async () => {
    try {
        const data = await fs.readFile('employees.json', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

const appendFile = async () => {
    try {
        await fs.appendFile('employees.json', newText);
        console.log('File updated!');
    } catch (err) {
        console.error(err);
    }
};

const deleteFile = async () => {
    try {
        await fs.unlink('employees.json');
        console.log('File deleted!');
    } catch (err) {
        console.error(err);
    }
};

const manageFiles = async () => {
    await writeFile();
    await readFile();
    await appendFile();
    await readFile();
    await deleteFile();
};

manageFiles();