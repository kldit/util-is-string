/**
 * @author Orlando Leite
 *
 * util functions
 */
if(!String.isString)
{
    String.isString = function (v) { return v != null && v.constructor === String };
}
