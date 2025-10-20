'use client';

import type { Service } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Clock, TestTube, Microscope, CheckCircle } from 'lucide-react';

type ServiceCardProps = {
  service: Service;
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Card
      className="flex h-full flex-col opacity-0 animate-in fade-in-0 slide-in-from-bottom-5"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl">{service.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {service.category}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-2 pt-2 text-primary">
          <Clock className="h-4 w-4" />
          <span>{service.turnaroundTime}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <p className="mb-4 text-sm text-muted-foreground">
          {service.description}
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="methodology">
            <AccordionTrigger className="text-sm">
              <div className="flex items-center gap-2">
                <Microscope className="h-4 w-4" /> Metodología
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm text-muted-foreground">
              {service.methodology}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="applications">
            <AccordionTrigger className="text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Aplicaciones Clínicas
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm text-muted-foreground">
              {service.applications}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
