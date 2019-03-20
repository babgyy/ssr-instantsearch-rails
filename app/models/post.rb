class Post < ApplicationRecord

  belongs_to :category, required: false

  include AlgoliaSearch

  algoliasearch do
    attribute :title, :body
    attribute :category do; category&.name; end
    attribute :created_at_i do; created_at.to_i; end
    attribute :updated_at_i do; updated_at.to_i; end

    attributesForFaceting [
      'category', 
    ]
    add_replica 'Post_updated_at_desc', inherit: true do
      customRanking [
        'desc(updated_at_i)',
      ]
    end
    add_replica 'Post_created_at_desc', inherit: true do
      customRanking [
        'desc(created_at)',
      ]
    end
    add_replica 'Post_updated_at_asc', inherit: true do
      customRanking [
        'asc(updated_at_i)',
      ]
    end
    add_replica 'Post_created_at_asc', inherit: true do
      customRanking [
        'asc(created_at)',
      ]
    end
  end
end
