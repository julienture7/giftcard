import React from 'react';
import { ArrowLeftRight, Verified } from 'lucide-react';
import { kycLevelIcons, scoreLabels, currencyOptions } from '../data/filterData';
import { Tooltip } from './ui/tooltip';
import { MoneroIcon, BitcoinIcon, LightningIcon, CreditCardIcon, CoinsIcon } from './icons/CurrencyIcons';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    image: string;
    verified: boolean;
    type: string;
    description: string;
    score: number;
    kycLevel: number;
    currencies: string[];
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const kycIcon = kycLevelIcons[service.kycLevel] || kycLevelIcons[0];
  const scoreColor = scoreLabels.find(s => s.score === service.score)?.color || 'bg-gray-500';
  const scoreLabel = scoreLabels.find(s => s.score === service.score)?.label || 'Unknown';

  return (
    <a href={`/service/${service.id}`} className="border-night-600 group bg-night-800 flex flex-col gap-3 rounded-xl border p-3">
      <div className="flex items-center gap-3">
        <img 
          src={service.image} 
          alt={service.name} 
          width="48" 
          height="48" 
          loading="lazy" 
          decoding="async" 
          className="size-12 shrink-0 rounded-sm object-contain bg-slate-700" 
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center self-stretch">
          <h3 className="font-title text-lg leading-none font-medium tracking-wide text-white flex items-center">
            {service.name}
            {service.verified && (
              <Tooltip content="Verified\" position="right">
                <span className="ml-1">
                  <Verified className="inline-block size-6 shrink-0 rounded-lg p-1 align-[-0.37em] text-verified-badge" />
                </span>
              </Tooltip>
            )}
          </h3>
          <div className="flex items-center gap-4 overflow-hidden mt-1">
            <span className="text-day-300 inline-flex shrink-0 items-center gap-1 text-sm leading-none">
              <ArrowLeftRight className="size-4" />
              <span>{service.type}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-day-400 line-clamp-3 text-sm leading-tight">{service.description}</p>
      </div>
      <div className="flex items-center justify-start">
        <Tooltip content={`${scoreLabel} score (${service.score}/10)`} position="top">
          <span className={`inline-flex size-6 items-center justify-center rounded-sm text-lg font-bold ${scoreColor} text-black`}>
            {service.score}
          </span>
        </Tooltip>
        <span className="text-day-300 ml-3 text-sm font-bold whitespace-nowrap">
          KYC {service.kycLevel}
          <span className="inline-block align-middle">{React.cloneElement(kycIcon, { className: "ms-1 size-4 shrink-0" })}</span>
        </span>
        <div className="-m-1 ml-auto flex">
          {service.currencies.map(curr => {
            let icon = null;
            if (curr === 'xmr') icon = <MoneroIcon className="box-content size-4 p-1 text-white" />;
            else if (curr === 'btc') icon = <BitcoinIcon className="box-content size-4 p-1 text-white" />;
            else if (curr === 'btc-ln') icon = <LightningIcon className="box-content size-4 p-1 text-white" />;
            else if (curr === 'fiat') icon = <CreditCardIcon className="box-content size-4 p-1 text-white" />;
            else if (curr === 'cash') icon = <CoinsIcon className="box-content size-4 p-1 text-white" />;
            
            if (!icon) return null;
            const currencyName = currencyOptions.find(c => c.value === curr)?.label || curr.toUpperCase();

            return (
              <Tooltip key={curr} content={currencyName} position="top">
                <span>{icon}</span>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;