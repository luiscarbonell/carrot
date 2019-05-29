
/**
 * @constructs Bot
 */
function Bot() {}

Bot.prototype = {
  from: {
    /**
     * Creates a Bot from a given `.csv` dataset
     *
     * @param {string} dataset A `.csv` string
     * @param {Object} options
     * @param {string[]} [options.outputs]  Specifies which `.csv` column header names will be used as "expected/ideal outputs" when training a bot on historic data.
     * @param {string[]} [options.inputs] Scpeficies which `.csv` header names will be used use as "given inputs" when training a bot on historic data.
     *
     * @example
     * const bot = new Bot();
     *
     * bot.from.csv(csv_string);
     *
     * @example
     * const bot = new Bot();
     *
     * bot.from.csv(csv_string, {
     *   inputs: ["person_age", "person_height"]
     *   outputs: ["person_salary"]
     * })
     */
    csv: function(dataset, options) {},
    /**
     * Creates a Bot from a given `.json` dataset
     *
     * @param {Object[]|string} dataset A JSON Object or `.json` string
     * @param {Object} options
     * @param {string[]} [options.outputs] Specifies which object paths/keys (e.g. `person.age`) will be used as "expected/ideal outputs" when training a bot on historic data.
     * @param {string[]} [options.inputs] Specifies which object paths/keys (e.g. `person.height`) will be used as "given inputs" when training a bot on historic data.
     *
     * @example
     * const bot = new Bot();
     *
     * // from [{...}, ...]
     * bot.from.json(array_of_objects);
     *
     * @example
     * const bot = new Bot();
     *
     * // from "[{...}, ...]"
     * bot.from.json(json_string);
     *
     * @example
     * const bot = new Bot();
     *
     * // w/ options
     * bot.from.json(json_string, {
     *   inputs: ["person.age", "person.height"],
     *   outputs: ["person.salary"]
     * })
     */
    json: function(dataset, options) {},
    /**
     * Creates a Bot from a given `.xml` dataset
     *
     * @param {string} dataset A `.xml` string
     * @param {Object} options
     * @param {string[]} [options.outputs] Specifies which paths/keys/tags (e.g. `person.age`) will be used as "expected/ideal outputs" when training a bot on historic data.
     * @param {string[]} [options.inputs] Specifies which object paths/keys/tags (e.g. `person.height`) will be used as "given inputs" when training a bot on historic data.
     *
     * @example
     * const bot = new Bot();
     *
     * bot.from.xml(xml_string);
     *
     * @example
     * const bot = new Bot();
     *
     * bot.from.xml(xml_string, {
     *   inputs: ["person.age", "person.height"],
     *   outputs: ["person.salary"]
     * })
     */
    xml: function(dataset, options) {}
  }
}