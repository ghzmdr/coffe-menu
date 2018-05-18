import {createClient} from 'contentful';

export function fetchData(SPACE_ID, API_KEY) {
    return new Promise((res, rej) => {

        const client = getClient(SPACE_ID, API_KEY);

        client.getEntries()
            .then(entries => {

                const orderedEntries = orderEntries(entries);
                res(orderedEntries);

            })
        })
}

function getClient(SPACE_ID, API_KEY) {
    return createClient({
        space: SPACE_ID,
        accessToken: API_KEY
    })
}

function orderEntries(entries) {

    const entriesByContentType = {};

    entries.items.forEach(i => {
        const contentType = i.sys.contentType.sys.id;

        if (!entriesByContentType[contentType]) {
            entriesByContentType[contentType] = [];
        }

        entriesByContentType[contentType].push(i.fields)
    })

    return entriesByContentType;

}
