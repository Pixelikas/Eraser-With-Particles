const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Mouse,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Particles,
		C3.Behaviors.Pin,
		C3.Behaviors.Sin,
		C3.Behaviors.Bullet,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetEffect,
		C3.Plugins.Particles.Cnds.OnCreated,
		C3.Plugins.Particles.Acts.SetEffect
	];
};
self.C3_JsPropNameTable = [
	{Mouse: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Sprite: 0},
	{Pin: 0},
	{Sine: 0},
	{Bullet: 0},
	{Particles: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{ColorBG: 0},
	{ColorBG2: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0}
];

self.InstanceType = {
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	ColorBG: class extends self.ISpriteInstance {},
	ColorBG2: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}