select ply.*, array_agg(needlesizes.size) as needle_sizes
from ply
left join ply_needlesizes
on ply.id = ply_needlesizes.ply_id
inner join needlesizes
on ply_needlesizes.needlesizes_id = needlesizes.id
group by ply.id

I did try to do it this way  but I decided that as it broke my code, and time was limited, I would go back to the original way instead.

select ply.*, array_agg(
  json_build_object(
    'id', needlesizes.id,
    'size', needlesizes.size,
    'description', needlesizes.description
  )
) as needlesizes_size,
from ply
left join ply_needlesizes
on ply.id = ply_needlesizes.ply_id
inner join needlesizes
on ply_needlesizes.needlesizes_id = needlesizes.id
group by ply.id



select needlesizes.*, array_agg(
  json_build_object(
    'id', needletype.id,
    'name', needletype.name,
    'usage', needletype.usage,
    'image', needletype.image
  )
) as needle_type
          from needlesizes
          left join needlesizes_needletype
          on needlesizes.id = needlesizes_needletype.needlesizes_id
          inner join needletype
          on needlesizes_needletype.needletype_id = needletype.id
          where needlesizes.id = $1
          group by needlesizes.id


select needletype.*, array_agg(
    json_build_object(
      'id', ply.id
      'name', ply.name
      'description', ply.description
      'image', ply.image
    )
 ) as ply
          from needletype
          left join needletype_ply
          on needletype.id = needletype_ply.needletype_id
          inner join ply
          on needletype_ply.needletype_id = ply.id
          where needletype.id = $1
          group by needletype.id