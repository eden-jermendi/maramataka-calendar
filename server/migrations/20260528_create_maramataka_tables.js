// server/migrations/20260528_create_maramataka_tables.js

export function up(knex) {
  return knex.schema
    .createTable('lunar_days', table => {
      table.string('id').primary(); // stable slug like 'day-whiro'
      table.integer('order').notNullable();
      table.string('name_tr').notNullable(); // nameTeReo
      table.string('name_en').notNullable(); // nameEnglish
      table.text('meaning_short').notNullable();
      table.text('recommended').notNullable(); // JSON string of activities
      table.string('energy_level').notNullable(); // 'High' | 'Medium' | 'Low'
      table.text('whakatauki').nullable();
      table.string('bracket').nullable(); // e.g. 'Whakaeke'
    })
    .createTable('lunar_months', table => {
      table.string('id').primary(); // stable slug like 'month-pipiri'
      table.string('name_tr').notNullable(); // nameTeReo
      table.string('name_en').notNullable(); // nameEnglish
    })
    .createTable('gregorian_anchors', table => {
      table.increments('id').primary();
      table.string('lunar_month_id')
        .notNullable()
        .references('id')
        .inTable('lunar_months')
        .onDelete('CASCADE');
      table.date('gregorian_start_date').notNullable(); // YYYY-MM-DD
      table.integer('year').notNullable();
    });
}

export function down(knex) {
  return knex.schema
    .dropTableIfExists('gregorian_anchors')
    .dropTableIfExists('lunar_months')
    .dropTableIfExists('lunar_days');
}
