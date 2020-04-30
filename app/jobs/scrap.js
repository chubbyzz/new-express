const fs = require('fs');
const slugify = require('slugify');

const scrap = require('./scrap/store');
const {Store} = require('./../models');

async function writeIds() {
  const ids = await scrap.ids();
  fs.writeFile('./app/jobs/scrap/ids.json', JSON.stringify(ids), 'utf8', () => {});
}

async function start() {
  const ids = JSON.parse(fs.readFileSync('./app/jobs/scrap/ids.json'));
  const lg_ids = await Store.findAll({
    ttributes: ['lg_id'],
    where: {
      lg_id: ids
    }
  });
  const noFound = ids.filter(id => !lg_ids.includes(id));
  console.log(noFound.length);
  noFound.map(async (id) => {
    try {
      let data = await scrap.store(id);
      data.slug = slugify(data.name, '-').toLowerCase();
      data.created_at = new Date();
      data.updated_at = new Date();

      console.log(await Store.create(data))
    } catch(e) {
      console.log(e.message);
    }
  });
}



start();