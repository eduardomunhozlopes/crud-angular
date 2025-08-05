var a = Object.create;
var s = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var g = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf,
	d = Object.prototype.hasOwnProperty;
var x = (o, e, p, n) => {
	if ((e && typeof e === "object") || typeof e === "function")
		for (const l of g(e))
			!d.call(o, l) &&
				l !== p &&
				s(o, l, {
					get: () => e[l],
					enumerable: !(n = c(e, l)) || n.enumerable,
				});
	return o;
};
var f = (o, e, p) => (
	(p = o != null ? a(m(o)) : {}),
	x(
		e || !o || !o.__esModule
			? s(p, "default", { value: o, enumerable: !0 })
			: p,
		o,
	)
);
var r = f(require("express")),
	i = (0, r.default)(),
	t = 3e3;
i.get("/", (_o, e) => {
	e.send("Hello World!");
});
i.listen(t, () => {
	console.log(`Example app listening on port ${t}`);
});
