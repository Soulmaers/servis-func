/*export default async function handler(req, res) {


    const entity_id = 30921211
    const url = `https://info7licenzeru.amocrm.ru/api/v4/users`;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQxMWNiMDNlNmFkOWNhYjE4YmI1MDIxNTMxNTBmNmNlMmM5ZTcxZDEwZWUzOWMwYzY0ZjU2ZDE1YmE4NGI0ZmFkYTNhNGI4NTZhMjU4NjQyIn0.eyJhdWQiOiJiMzdhZWM0Yi1kZmUyLTQ0OTAtYmZkYy00NDI2MTczZjI0ZjUiLCJqdGkiOiJkMTFjYjAzZTZhZDljYWIxOGJiNTAyMTUzMTUwZjZjZTJjOWU3MWQxMGVlMzljMGM2NGY1NmQxNWJhODRiNGZhZGEzYTRiODU2YTI1ODY0MiIsImlhdCI6MTczNTAzOTM3NywibmJmIjoxNzM1MDM5Mzc3LCJleHAiOjE4OTI0MTkyMDAsInN1YiI6Ijc2MjIyNjAiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk4MTI2MzAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSJdLCJoYXNoX3V1aWQiOiIwMDMzNGExYi1mMmFjLTRiZTctYTJhNi1kMzc0ZTYwMjQ1Y2MiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.ey9CRrqGkvgAQubREQcUgiWVWbNieXXqbBA9Mc3-mZhxstjDQ2v5eO46j195jkn5oEe4LvkX0Lw_JJfUlAtsSNYJGvf-_-knB2H4VZx2c-6Axv_HOltMj79ZL2lX1ulUv4cQ20lIwQdf2sJZVvR0A5133DPskfubdN8YXNdaiF76W6120UxWB2vCCawHskV2o0FZpJux-WqSzpSpevm4LwCXybtxu9oJ8KJ__FfCFuH-Wj-hV2zgDit01FP1GpuFz6MhQ4tf3oosbu4ChaAIrVebC8LhLOV3_d-Dsi06Wp9Ccb6LmpbMRkN1_l25lcVt1BlnMkm5T4OhqDeVDd-BrA'
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Указываем тип содержимого, если это необходимо
    };
    try {
        const time = 1734998469
        const response = await fetch(url, {
            method: 'GET', // Метод запроса
            headers: headers
        });
        console.log(response)
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        // Парсим ответ в формате JSON
        const data = await response.json();
        //    console.log(F); // Выводим данные в консоль
        console.log(data._embedded)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}*/

/*
async function fetchNotes(page, time) {
    // const url = `https://info7licenzeru.amocrm.ru/api/v4/contacts/notes?filter[updated_at]=${time}&page=${page}&limit=250`;
    const url = `https://info7licenzeru.amocrm.ru/api/v4/contacts/notes?&filter[note_type][]=call_out&filter[note_type][]=call_in&filter[updated_at]=${time}&page=${page}&limit=250`;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQxMWNiMDNlNmFkOWNhYjE4YmI1MDIxNTMxNTBmNmNlMmM5ZTcxZDEwZWUzOWMwYzY0ZjU2ZDE1YmE4NGI0ZmFkYTNhNGI4NTZhMjU4NjQyIn0.eyJhdWQiOiJiMzdhZWM0Yi1kZmUyLTQ0OTAtYmZkYy00NDI2MTczZjI0ZjUiLCJqdGkiOiJkMTFjYjAzZTZhZDljYWIxOGJiNTAyMTUzMTUwZjZjZTJjOWU3MWQxMGVlMzljMGM2NGY1NmQxNWJhODRiNGZhZGEzYTRiODU2YTI1ODY0MiIsImlhdCI6MTczNTAzOTM3NywibmJmIjoxNzM1MDM5Mzc3LCJleHAiOjE4OTI0MTkyMDAsInN1YiI6Ijc2MjIyNjAiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk4MTI2MzAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSJdLCJoYXNoX3V1aWQiOiIwMDMzNGExYi1mMmFjLTRiZTctYTJhNi1kMzc0ZTYwMjQ1Y2MiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.ey9CRrqGkvgAQubREQcUgiWVWbNieXXqbBA9Mc3-mZhxstjDQ2v5eO46j195jkn5oEe4LvkX0Lw_JJfUlAtsSNYJGvf-_-knB2H4VZx2c-6Axv_HOltMj79ZL2lX1ulUv4cQ20lIwQdf2sJZVvR0A5133DPskfubdN8YXNdaiF76W6120UxWB2vCCawHskV2o0FZpJux-WqSzpSpevm4LwCXybtxu9oJ8KJ__FfCFuH-Wj-hV2zgDit01FP1GpuFz6MhQ4tf3oosbu4ChaAIrVebC8LhLOV3_d-Dsi06Wp9Ccb6LmpbMRkN1_l25lcVt1BlnMkm5T4OhqDeVDd-BrA'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        return [];
    }
    return await response.json()
}


export default async function handler(req, res) {
    const now = new Date(); // Текущее время
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Сегодняшняя дата в 00:00:00
    const time = Math.floor(today.getTime() / 1000)
    let page = 1;
    let hasMoreData = true;
    const allNotes = [];
    while (hasMoreData) {
        try {
            const data = await fetchNotes(page, time);
            const array = data._embedded.notes.filter(e => e.created_at > time).map(it => {
                return ({
                    id_user: it.created_by,
                    timecalls: it.created_at,
                    type: it.note_type,
                    duration: it.params.duration,
                    call_result: it.params.call_result
                })
            })
            allNotes.push(...array); // Добавляем новые записи в общий массив
            // Проверяем, есть ли следующая страница
            hasMoreData = data._embedded.notes.length === 250;
            page++;
        } catch (error) {
            console.error(error);
            hasMoreData = false; // В случае ошибки завершаем цикл
        }
    }

    const result = filterUsers(allNotes)

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.json(result);
}

function filterUsers(allNotes) {
    const usersId = [11859642, 10921330, 10916554, 8683795, 7983985, 9287458, 9158418]
    const notes = allNotes.filter(e => usersId.includes(e.id_user));
    return processCalls(notes)
}

function processCalls(notes) {
    const users = {
        11859642: { calls: 0, calls30: 0, calls60: 0 },
        10921330: { calls: 0, calls30: 0, calls60: 0 },
        10916554: { calls: 0, calls30: 0, calls60: 0 },
        8683795: { calls: 0, calls30: 0, calls60: 0 },
        7983985: { calls: 0, calls30: 0, calls60: 0 },
        9287458: { calls: 0, calls30: 0, calls60: 0 },
        9158418: { calls: 0, calls30: 0, calls60: 0 },
    }

    for (let i = 0; i < notes.length; i++) {
        users[notes[i].id_user].calls++
        if (notes[i].duration > 30) {
            users[notes[i].id_user].calls30++
        }
        if (notes[i].duration > 60) {
            users[notes[i].id_user].calls60++
        }
    }
    return users
}*/


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


async function fetchNotes(page, time) {
    const urlu = `https://info7licenzeru.amocrm.ru/api/v4/users`;
    const url = `https://info7licenzeru.amocrm.ru/api/v4/contacts/notes?&filter[note_type][]=call_out&filter[note_type][]=call_in&filter[updated_at]=${time}&page=${page}&limit=250`;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQxMWNiMDNlNmFkOWNhYjE4YmI1MDIxNTMxNTBmNmNlMmM5ZTcxZDEwZWUzOWMwYzY0ZjU2ZDE1YmE4NGI0ZmFkYTNhNGI4NTZhMjU4NjQyIn0.eyJhdWQiOiJiMzdhZWM0Yi1kZmUyLTQ0OTAtYmZkYy00NDI2MTczZjI0ZjUiLCJqdGkiOiJkMTFjYjAzZTZhZDljYWIxOGJiNTAyMTUzMTUwZjZjZTJjOWU3MWQxMGVlMzljMGM2NGY1NmQxNWJhODRiNGZhZGEzYTRiODU2YTI1ODY0MiIsImlhdCI6MTczNTAzOTM3NywibmJmIjoxNzM1MDM5Mzc3LCJleHAiOjE4OTI0MTkyMDAsInN1YiI6Ijc2MjIyNjAiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk4MTI2MzAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSJdLCJoYXNoX3V1aWQiOiIwMDMzNGExYi1mMmFjLTRiZTctYTJhNi1kMzc0ZTYwMjQ1Y2MiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.ey9CRrqGkvgAQubREQcUgiWVWbNieXXqbBA9Mc3-mZhxstjDQ2v5eO46j195jkn5oEe4LvkX0Lw_JJfUlAtsSNYJGvf-_-knB2H4VZx2c-6Axv_HOltMj79ZL2lX1ulUv4cQ20lIwQdf2sJZVvR0A5133DPskfubdN8YXNdaiF76W6120UxWB2vCCawHskV2o0FZpJux-WqSzpSpevm4LwCXybtxu9oJ8KJ__FfCFuH-Wj-hV2zgDit01FP1GpuFz6MhQ4tf3oosbu4ChaAIrVebC8LhLOV3_d-Dsi06Wp9Ccb6LmpbMRkN1_l25lcVt1BlnMkm5T4OhqDeVDd-BrA'
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            console.error(`Ошибка: ${response.status} ${response.statusText}`);
            return [];
        }
        const result = await response.json();
        //  console.log(result._embedded.users)
        return result;

    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        return [];
    }
}


app.get('/', async (req, res) => {
    try {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const time = Math.floor(today.getTime() / 1000)
        let page = 1;
        let hasMoreData = true;
        const allNotes = [];
        while (hasMoreData) {
            try {
                const data = await fetchNotes(page, time);
                if (data && data._embedded && data._embedded.notes) {
                    const array = data._embedded.notes.filter(e => e.created_at > time).map(it => {
                        return ({
                            id_user: it.created_by,
                            timecalls: it.created_at,
                            type: it.note_type,
                            duration: it.params.duration,
                            call_result: it.params.call_result
                        })
                    })
                    allNotes.push(...array);
                    hasMoreData = data._embedded.notes.length === 250;
                    page++;
                } else {
                    hasMoreData = false; // Завершаем цикл, если нет данных или данных нет нужной структуры
                }
            } catch (error) {
                console.error("Ошибка в цикле загрузки данных:", error);
                hasMoreData = false;
            }

        }

        const result = filterUsers(allNotes)

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.json(result);


    } catch (error) {
        console.error("Ошибка при выполнении handler:", error);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.json([]);
    }
});

function filterUsers(allNotes) {
    const usersId = [11859642, 10921330, 10916554, 8683795, 7983985, 9287458, 9158418, 12461638]
    const notes = allNotes.filter(e => usersId.includes(e.id_user));
    return processCalls(notes)
}
function processCalls(notes) {
    const users = {
        11859642: { calls: 0, calls30: 0, calls60: 0 },
        10921330: { calls: 0, calls30: 0, calls60: 0 },
        10916554: { calls: 0, calls30: 0, calls60: 0 },
        8683795: { calls: 0, calls30: 0, calls60: 0 },
        7983985: { calls: 0, calls30: 0, calls60: 0 },
        9287458: { calls: 0, calls30: 0, calls60: 0 },
        9158418: { calls: 0, calls30: 0, calls60: 0 },
        12461638: { calls: 0, calls30: 0, calls60: 0 },
    }

    for (let i = 0; i < notes.length; i++) {
        users[notes[i].id_user].calls++
        if (notes[i].duration > 30) {
            users[notes[i].id_user].calls30++
        }
        if (notes[i].duration > 60) {
            users[notes[i].id_user].calls60++
        }
    }
    return users
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});