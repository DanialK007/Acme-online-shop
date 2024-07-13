import React from 'react'
import { testimonials } from './data'
import { Card, CardContent } from '../ui/card'

function Customer() {
    return (
        <div className="p-5 lg:p-10">
            <section className="pb-12">
                <div className="container mx-auto">
                    <h2 className="mb-8 text-3xl font-bold text-[#de772d]">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id}>
                                <CardContent className="h-full">
                                    <blockquote className="flex flex-col gap-4 pt-5 justify-between h-full">
                                        <p className="text-muted-foreground">"{testimonial.quote}"</p>
                                        <cite className="text-sm font-medium">- {testimonial.name}</cite>
                                    </blockquote>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Customer
