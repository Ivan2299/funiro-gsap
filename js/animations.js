gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();

// loader
tlLoader.set('.loader__item', {
	yPercent: -100,
});
tlLoader.set('.loader__title', {
	opacity: 0,
	scale: 0.5,
});

tlLoader
	.to('.loader__item', {
		opacity: 1,
		duration: 1,
		stagger: 0.25,
		yPercent: 0,
	})
	.to('.loader__item', {
		opacity: 1,
		duration: 1,
		stagger: 0.25,
		yPercent: 100,
	})
	.to(
		'.loader__title',
		{
			opacity: 1,
			duration: 1,
			scale: 1.2,
		},
		'-=0.2',
	)
	.to('.loader__title', {
		opacity: 0,
		duration: 1,
		scale: 0.8,
	})
	.to(
		'.loader',
		{
			duration: 1,
			yPercent: -100,
			onComplete() {
				document.querySelector('.loader').remove();
			},
		},
		'-=0.3',
	);

// laptop animations
const laptopScreen = window.matchMedia('(min-width: 1024px)').matches;

if (laptopScreen) {
	// hero scroll animations
	gsap.to('.section__hero', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: 1,
		},
		css: {
			backgroundColor: '#2b795b',
		},
	});
	gsap.to('.title__row-1', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: '-100px top',
			scrub: 1,
		},
		yPercent: -80,
	});
	gsap.to('.title__row-2', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: '-100px top',
			scrub: 1,
		},
		yPercent: -120,
	});
	gsap.to('.hero__svg', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: 1,
		},
		yPercent: 120,
	});
	gsap.to('.hero__svg', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: 1,
		},
		scale: 0.8,
	});
	gsap.to('.hero__circle', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: 1,
		},
		scale: 0,
		stagger: 0.1,
	});
	gsap.to('.hero__image', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: 1,
		},
		scale: 1.2,
		y: -50,
	});
	gsap.to('.hero__buttons', {
		scrollTrigger: {
			trigger: '.section__hero',
			start: 'top top',
			scrub: 1,
		},
		y: 100,
		x: 100,
	});

	gsap.from('.materials__title', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-90% top',
			scrub: 1,
		},
		autoAlpha: 0,
		duration: 1,
	});
	gsap.from('.materials__text', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-90% top',
			scrub: 1,
		},
		autoAlpha: 0,
		duration: 1,
	});
	gsap.from('.materials__btn', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-90% top',
			scrub: 1,
		},
		autoAlpha: 0,
		duration: 0.5,
	});
	gsap.from('.products__item', {
		scrollTrigger: {
			trigger: '.section__materials',
			start: '-90% top',
			scrub: 1,
		},
		autoAlpha: 0,
		duration: 1,
		stagger: 0.25,
		duration: 1,
		xPercent: -50,
	});

	// choose animation
	const tlChoose = gsap.timeline();
	tlChoose.from('.section__choose', {
		scrollTrigger: {
			trigger: '.section__choose',
			start: '0 0',
			scrub: 1,
			pin: true,
		},
	});
	tlChoose
		.from('.choose__title', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-120% 0',
				scrub: 1,
			},
			autoAlpha: 0,
			y: 30,
		})
		.from('.choose__text', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-120% 0',
				scrub: 1,
			},
			autoAlpha: 0,
			y: 60,
		})
		.from('.why__svg circle, .why__svg ellipse', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '0 0',
				scrub: 1,
			},
			css: {
				fill: '#2b795b',
				scale: 0.2,
				stagger: 0.025,
			},
		})
		.from('.why__image', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '0 0',
				scrub: 1,
			},
			css: {
				width: 0,
				height: '100%',
			},
		})
		.from('.why__item', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-200 0',
				scrub: 1,
			},
			y: 50,
			autoAlpha: 0,
			stagger: 0.25,
		})
		.from('.why__icon circle', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-200 0',
				scrub: 1,
			},

			css: {
				fill: '#fffbbe',
				filOpacity: 1,
			},
		})
		.from('.why__icon svg', {
			scrollTrigger: {
				trigger: '.section__choose',
				start: '-200 0',
				scrub: 1,
			},
			scale: 2,
			stagger: 0.25,
		});

	// help
	const tlHelp = gsap.timeline();
	tlHelp
		.from('.section__help', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '0 0',
				scrub: 1,
			},
		})
		.from('.help__img-1', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '0 center',
				scrub: 1,
				end: '+=300',
			},
			xPercent: 30,
			duration: 1,
		})
		.from('.help__img-2', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '0 center',
				scrub: 1,
				end: '+=300',
			},
			scale: 0.95,
			xPercent: -50,
			yPercent: -50,
		})
		.from('.help__svg circle, .help__svg ellipse', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '0 center',
				end: '+=300',
				scrub: 1,
			},
			scale: 0.2,
			stagger: 0.25,
		})
		.from('.help__img-3', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '0 center',
				scrub: 1,
				end: '+=300',
			},
			scale: 0.95,
			xPercent: -100,
		})
		.from('.help__title', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '0 center',
				scrub: 1,
				end: '+=300',
			},
			y: 50,
			autoAlpha: 0,
		})
		.from('.help__list li', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '0 center',
				scrub: 1,
				end: '+=150',
			},
			x: 30,
			autoAlpha: 0,
			stagger: 0.25,
		})
		.from('.help__text', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '50 center',
				scrub: 1,
				end: '+=150',
			},
			y: 40,
			autoAlpha: 0,
		})
		.from('.help__btn', {
			scrollTrigger: {
				trigger: '.section__help',
				start: '50 center',
				scrub: 1,
				end: '+=150',
			},
			y: 50,
			autoAlpha: 0,
		});

	// examples

	const tlExamples = gsap.timeline();

	tlExamples.from('.examples__item', {
		scrollTrigger: {
			trigger: '.section__examples',
			start: '0 75%',
			scrub: 1,
			end: '+=500',
		},
		x: -100,
		autoAlpha: 0,
		stagger: 0.25,
		duration: 1,
	});

	// testimonials

	const tltestimonials = gsap.timeline();

	tltestimonials
		.from('.section__testimonials', {
			scrollTrigger: {
				trigger: '.section__testimonials',
				start: '0 center',
				scrub: 1,
				end: '+=150',
			},
			css: {
				backgroundColor: '#587573',
			},
		})
		.from(' .testimonials__text', {
			scrollTrigger: {
				trigger: '.section__testimonials',
				start: '0 center',
				scrub: 1,
				end: '+=150',
			},
			css: {
				color: '#fff',
			},
		})
		.from(' .testimonials__title', {
			scrollTrigger: {
				trigger: '.section__testimonials',
				start: '0 center',
				scrub: 1,
				end: '+=150',
			},
			css: {
				color: '#fff',
			},
		});

	// section__blog

	const tlBlog = gsap.timeline();
	tlBlog.from('.section__blog-title', {
		scrollTrigger: {
			trigger: '.section__blog',
			start: '0 75%',
			scrub: 1,
			end: '+=150',
		},
		xPercent: -100,
		duration: 1,
	});
	tlBlog.from('.blog__link', {
		scrollTrigger: {
			trigger: '.section__blog',
			start: '0 75%',
			scrub: 1,
			end: '+=150',
		},
		xPercent: 100,
		duration: 1,
	});
	tlBlog.from('.blog__img img', {
		scrollTrigger: {
			trigger: '.section__blog',
			start: '0 75%',
			scrub: 1,
			end: '+=300',
		},
		duration: 1.5,
		css: {
			height: 0,
		},
	});
	const tlSubscribe = gsap.timeline();
	tlSubscribe
		.from('.subscribe__image', {
			scrollTrigger: {
				trigger: '.section__subscribe',
				start: '30% center',
				scrub: 1,
			},
			x: 120,
			y: -30,
		})
		.from('.form__item', {
			scrollTrigger: {
				trigger: '.section__subscribe',
				start: '0 center',
				scrub: false,
				end: '+=40',
			},
			stagger: 0.25,
			autoAlpha: 0,
			y: 50,
			duration: 1,
		});
}
