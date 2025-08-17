import fs from 'fs';

const file = "data.json";

function addData(email, otp) {
    let allData = [];
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, "utf-8");
        allData = content ? JSON.parse(content) : [];
    }

    allData.push({ email, otp });
    fs.writeFileSync(file, JSON.stringify(allData, null, 2));

    setTimeout(() => {
        remove(email);
    }, 5 * 60 * 1000); // 5 daqiqa
}

function getAll() {
    if (!fs.existsSync(file)) return [];
    const content = fs.readFileSync(file, "utf-8");
    return content ? JSON.parse(content) : [];
}

function getUserByEmail(email) {
  // data.json ni o‘qib olish
  const rawData = fs.readFileSync("./data.json", "utf-8");
  const users = JSON.parse(rawData);

  // email bo‘yicha izlash
  const user = users.find(u => u.email === email);

  return user || null; // topilmasa null qaytaradi
}


function remove(email) {
    if (!fs.existsSync(file)) return;
    let data = JSON.parse(fs.readFileSync(file, "utf-8"));
    data = data.filter(i => i.email !== email);
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

export { addData, getAll, remove,getUserByEmail };
