const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/api/contents', (req, res) => {
    res.send([
        {
            id: 1,
            title: '남자 코트 추천',
            date: '2021.12.01'
        },
        {
            id: 2,
            title: '크리스마스 데이트 추천',
            date: '2021.11.29'
        },
        {
            id: 3,
            title: '맥북 m1 후기',
            date: '11.20'
        }
    ])
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})